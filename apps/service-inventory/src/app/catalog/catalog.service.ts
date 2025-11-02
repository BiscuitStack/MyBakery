import { Injectable } from '@nestjs/common';
import { BakewiseError, ErrorCode } from '@bakewise/common-errors';
import { Schema, validate } from '@bakewise/validation';

import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import {
  InventoryRepository,
  StockItem,
} from '../persistence/inventory.repository';
import {
  CreateStockItemRequest,
  StockItemResponse,
} from './dto/create-stock-item.dto';

const STOCK_ITEM_SCHEMA: Schema<CreateStockItemRequest> = {
  name: { type: 'string', trim: true, min: 2 },
  unit: {
    type: 'string',
    enum: ['g', 'kg', 'mg', 'ml', 'l', 'unit'],
  },
  reorderLevel: { type: 'number', min: 0 },
  openingQuantity: { type: 'number', nullable: true, min: 0 },
} as const;

@Injectable()
export class CatalogService {
  constructor(
    private readonly repository: InventoryRepository,
    private readonly eventPublisher: DomainEventPublisher,
  ) {}

  async createStockItem(
    tenantId: string,
    request: Record<string, unknown>,
  ): Promise<StockItemResponse> {
    const validation = validate<CreateStockItemRequest>(
      request,
      STOCK_ITEM_SCHEMA,
    );

    if (!validation.success) {
      throw new BakewiseError(
        400,
        ErrorCode.INVALID_INPUT,
        'Invalid stock item payload',
        (validation as Extract<typeof validation, { success: false }>).issues,
      );
    }

    const data = validation.data;
    const categories = Array.isArray(request['categories'])
      ? (request['categories'] as unknown[])
          .map((value) => String(value).trim())
          .filter((value) => value.length > 0)
      : [];

    let record: StockItem;
    try {
      record = await this.repository.createStockItem({
        tenantId,
        name: data.name,
        unit: data.unit,
        reorderLevel: data.reorderLevel,
        categories,
        openingQuantity: data.openingQuantity,
      });
    } catch (error) {
      throw new BakewiseError(
        409,
        ErrorCode.CONFLICT,
        (error as Error).message ?? 'Failed to create stock item',
      );
    }

    await this.eventPublisher.publish(
      {
        context: 'inventory',
        entity: 'stock-item',
        event: 'created',
        version: 1,
      },
      {
        tenantId,
        stockItemId: record.id,
        name: record.name,
        unit: record.unit,
        reorderLevel: record.reorderLevel,
        categories: record.categories,
        occurredAt: record.createdAt,
      },
    );

    return this.toResponse(record);
  }

  async listStockItems(tenantId: string): Promise<StockItemResponse[]> {
    const items = await this.repository.listStockItems(tenantId);
    return items.map((record) => this.toResponse(record));
  }

  private toResponse(record: StockItem): StockItemResponse {
    return {
      id: record.id,
      name: record.name,
      unit: record.unit,
      reorderLevel: record.reorderLevel,
      categories: record.categories,
      currentQuantity: record.currentQuantity,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    };
  }
}
