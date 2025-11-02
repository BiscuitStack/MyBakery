import { Injectable } from '@nestjs/common';
import { BakewiseError, ErrorCode } from '@bakewise/common-errors';
import { Schema, validate } from '@bakewise/validation';
import { Unit } from '@bakewise/units';

import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import {
  InventoryRepository,
  Purchase,
  StockItem,
} from '../persistence/inventory.repository';
import {
  LogPurchaseRequest,
  PurchaseResponse,
} from './dto/log-purchase.dto';

type PurchaseMetadata = Pick<LogPurchaseRequest, 'supplierName' | 'reference'>;

const PURCHASE_METADATA_SCHEMA: Schema<PurchaseMetadata> = {
  supplierName: { type: 'string', nullable: true, trim: true },
  reference: { type: 'string', nullable: true, trim: true },
} as const;

@Injectable()
export class PurchasesService {
  constructor(
    private readonly repository: InventoryRepository,
    private readonly eventPublisher: DomainEventPublisher,
  ) {}

  async logPurchase(
    tenantId: string,
    request: Record<string, unknown>,
  ): Promise<PurchaseResponse> {
    const metadataValidation = validate<PurchaseMetadata>(
      request,
      PURCHASE_METADATA_SCHEMA,
    );

    if (!metadataValidation.success) {
      throw new BakewiseError(
        400,
        ErrorCode.INVALID_INPUT,
        'Invalid purchase payload',
        (metadataValidation as Extract<
          typeof metadataValidation,
          { success: false }
        >).issues,
      );
    }

    const data = metadataValidation.data;
    const rawLinesUnknown = request['lines'];
    if (!Array.isArray(rawLinesUnknown) || rawLinesUnknown.length === 0) {
      throw new BakewiseError(
        400,
        ErrorCode.INVALID_INPUT,
        'Purchase requires at least one line',
      );
    }

    const rawLines = rawLinesUnknown as unknown[];

    const lines = rawLines.map((entry) => {
      if (typeof entry !== 'object' || entry === null) {
        throw new BakewiseError(
          400,
          ErrorCode.INVALID_INPUT,
          'Each line must include stockItemId, quantity, unit, unitCost',
        );
      }

      const line = entry as Record<string, unknown>;
      const stockItemId = line.stockItemId;
      const quantity = line.quantity;
      const unit = line.unit;
      const unitCost = line.unitCost;
      if (
        typeof stockItemId !== 'string' ||
        typeof quantity !== 'number' ||
        typeof unit !== 'string' ||
        typeof unitCost !== 'number'
      ) {
        throw new BakewiseError(
          400,
          ErrorCode.INVALID_INPUT,
          'Invalid purchase line',
        );
      }

      return {
        stockItemId,
        quantity,
        unit: unit as Unit,
        unitCost,
      };
    });

    let record: Purchase;
    let updatedItems: StockItem[];
    try {
      const result = await this.repository.logPurchase({
        tenantId,
        supplierName: data.supplierName,
        reference: data.reference,
        lines,
      });
      record = result.purchase;
      updatedItems = result.updatedItems;
    } catch (error) {
      throw new BakewiseError(
        400,
        ErrorCode.INVALID_INPUT,
        (error as Error).message ?? 'Failed to record purchase',
      );
    }

    await Promise.all(
      updatedItems.map((item) =>
        this.eventPublisher.publish(
          {
            context: 'inventory',
            entity: 'stock-level',
            event: 'changed',
            version: 1,
          },
          {
            tenantId,
            stockItemId: item.id,
            quantity: item.currentQuantity,
            occurredAt: record.occurredAt,
          },
        ),
      ),
    );

    await this.eventPublisher.publish(
      {
        context: 'inventory',
        entity: 'purchase',
        event: 'recorded',
        version: 1,
      },
      {
        tenantId,
        purchaseId: record.id,
        totalCost: record.totalCost,
        occurredAt: record.occurredAt,
      },
    );

    return this.toResponse(record);
  }

  async listPurchases(tenantId: string): Promise<PurchaseResponse[]> {
    const purchases = await this.repository.listPurchases(tenantId);
    return purchases.map((record) => this.toResponse(record));
  }

  private toResponse(record: Purchase): PurchaseResponse {
    return {
      id: record.id,
      supplierName: record.supplierName,
      reference: record.reference,
      occurredAt: record.occurredAt,
      totalCost: record.totalCost,
      lines: record.lines.map((line) => ({
        stockItemId: line.stockItemId,
        quantity: line.quantity,
        unit: line.unit,
        unitCost: line.unitCost,
        totalCost: line.totalCost,
      })),
    };
  }
}
