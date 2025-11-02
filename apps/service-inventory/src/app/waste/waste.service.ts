import { Injectable } from '@nestjs/common';
import { BakewiseError, ErrorCode } from '@bakewise/common-errors';
import { Schema, validate } from '@bakewise/validation';

import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import {
  InventoryRepository,
  WasteEntry,
  StockItem,
} from '../persistence/inventory.repository';
import { LogWasteRequest, WasteResponse } from './dto/log-waste.dto';

const WASTE_SCHEMA: Schema<LogWasteRequest> = {
  stockItemId: { type: 'string', trim: true },
  quantity: { type: 'number', min: 0 },
  unit: {
    type: 'string',
    enum: ['g', 'kg', 'mg', 'ml', 'l', 'unit'],
  },
  reason: { type: 'string', trim: true, min: 2 },
} as const;

@Injectable()
export class WasteService {
  constructor(
    private readonly repository: InventoryRepository,
    private readonly eventPublisher: DomainEventPublisher,
  ) {}

  async logWaste(
    tenantId: string,
    request: Record<string, unknown>,
  ): Promise<WasteResponse> {
    const validation = validate<LogWasteRequest>(request, WASTE_SCHEMA);

    if (!validation.success) {
      throw new BakewiseError(
        400,
        ErrorCode.INVALID_INPUT,
        'Invalid waste payload',
        (validation as Extract<typeof validation, { success: false }>).issues,
      );
    }

    let record: WasteEntry;
    let updatedItem: StockItem;
    try {
      const result = await this.repository.logWaste({
        tenantId,
        stockItemId: validation.data.stockItemId,
        quantity: validation.data.quantity,
        unit: validation.data.unit,
        reason: validation.data.reason,
      });
      record = result.waste;
      updatedItem = result.updatedItem;
    } catch (error) {
      throw new BakewiseError(
        400,
        ErrorCode.INVALID_INPUT,
        (error as Error).message ?? 'Failed to log waste',
      );
    }

    await this.eventPublisher.publish(
      {
        context: 'inventory',
        entity: 'waste',
        event: 'logged',
        version: 1,
      },
      {
        tenantId,
        stockItemId: record.stockItemId,
        quantity: record.quantity,
        unit: record.unit,
        reason: record.reason,
        occurredAt: record.occurredAt,
      },
    );

    await this.eventPublisher.publish(
      {
        context: 'inventory',
        entity: 'stock-level',
        event: 'changed',
        version: 1,
      },
      {
        tenantId,
        stockItemId: updatedItem.id,
        quantity: updatedItem.currentQuantity,
        occurredAt: record.occurredAt,
      },
    );

    return this.toResponse(record);
  }

  async listWaste(tenantId: string): Promise<WasteResponse[]> {
    const records = await this.repository.listWaste(tenantId);
    return records.map((record) => this.toResponse(record));
  }

  private toResponse(record: WasteEntry): WasteResponse {
    return {
      id: record.id,
      stockItemId: record.stockItemId,
      quantity: record.quantity,
      unit: record.unit,
      reason: record.reason,
      occurredAt: record.occurredAt,
    };
  }
}
