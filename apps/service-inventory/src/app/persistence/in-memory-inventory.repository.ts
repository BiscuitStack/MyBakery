import { randomUUID } from 'crypto';
import {
  canConvert,
  convertUnit,
  Unit,
} from '@bakewise/units';

import {
  InventoryRepository,
  Purchase,
  PurchaseLine,
  StockItem,
  WasteEntry,
} from './inventory.repository';

type CreateStockItemInput = {
  tenantId: string;
  name: string;
  unit: Unit;
  reorderLevel: number;
  categories: string[];
  openingQuantity?: number;
};

type PurchaseInput = {
  tenantId: string;
  supplierName?: string;
  reference?: string;
  lines: Array<{
    stockItemId: string;
    quantity: number;
    unit: Unit;
    unitCost: number;
  }>;
};

type WasteInput = {
  tenantId: string;
  stockItemId: string;
  quantity: number;
  unit: Unit;
  reason: string;
};

export class InMemoryInventoryRepository
  extends InventoryRepository
  implements InventoryRepository
{
  private readonly stockItems = new Map<string, StockItem>();
  private readonly stockItemsByTenantAndName = new Map<string, StockItem>();
  private readonly purchases = new Map<string, Purchase>();
  private readonly wasteLogs = new Map<string, WasteEntry>();

  async createStockItem(input: CreateStockItemInput): Promise<StockItem> {
    const now = new Date().toISOString();
    const id = randomUUID();
    const nameKey = this.stockItemNameKey(input.tenantId, input.name);
    if (this.stockItemsByTenantAndName.has(nameKey)) {
      throw new Error('Stock item name already exists for this tenant');
    }

    const record: StockItem = {
      id,
      tenantId: input.tenantId,
      name: input.name,
      unit: input.unit,
      reorderLevel: input.reorderLevel,
      categories: input.categories,
      currentQuantity: input.openingQuantity ?? 0,
      createdAt: now,
      updatedAt: now,
    };

    this.stockItems.set(id, record);
    this.stockItemsByTenantAndName.set(nameKey, record);

    return record;
  }

  async listStockItems(tenantId: string): Promise<StockItem[]> {
    return [...this.stockItems.values()].filter(
      (item) => item.tenantId === tenantId,
    );
  }

  async listLowStock(tenantId: string): Promise<StockItem[]> {
    return (await this.listStockItems(tenantId)).filter(
      (item) => item.currentQuantity <= item.reorderLevel,
    );
  }

  async logPurchase(
    input: PurchaseInput,
  ): Promise<{ purchase: Purchase; updatedItems: StockItem[] }> {
    const now = new Date().toISOString();
    const id = randomUUID();
    const updatedItems: StockItem[] = [];

    const lines: PurchaseLine[] = await Promise.all(
      input.lines.map(async (line) => {
        const item = await this.getStockItem(input.tenantId, line.stockItemId);
        const quantityInItemUnit = this.toItemUnit(
          item.unit,
          line.unit,
          line.quantity,
        );
        const updated = await this.updateStockQuantity(
          input.tenantId,
          line.stockItemId,
          quantityInItemUnit,
          item.unit,
        );
        updatedItems.push(updated);

        const totalCost = quantityInItemUnit * line.unitCost;
        return {
          stockItemId: line.stockItemId,
          quantity: quantityInItemUnit,
          unit: item.unit,
          unitCost: line.unitCost,
          totalCost,
        };
      }),
    );

    const totalCost = lines.reduce((sum, line) => sum + line.totalCost, 0);

    const record: Purchase = {
      id,
      tenantId: input.tenantId,
      supplierName: input.supplierName ?? null,
      reference: input.reference ?? null,
      occurredAt: now,
      totalCost,
      lines,
    };

    this.purchases.set(id, record);
    return { purchase: record, updatedItems };
  }

  async listPurchases(tenantId: string): Promise<Purchase[]> {
    return [...this.purchases.values()].filter(
      (purchase) => purchase.tenantId === tenantId,
    );
  }

  async logWaste(
    input: WasteInput,
  ): Promise<{ waste: WasteEntry; updatedItem: StockItem }> {
    const item = await this.getStockItem(input.tenantId, input.stockItemId);
    const quantityInItemUnit = this.toItemUnit(
      item.unit,
      input.unit,
      input.quantity,
    );
    const updatedItem = await this.updateStockQuantity(
      input.tenantId,
      input.stockItemId,
      -quantityInItemUnit,
      item.unit,
    );

    const record: WasteEntry = {
      id: randomUUID(),
      tenantId: input.tenantId,
      stockItemId: input.stockItemId,
      quantity: quantityInItemUnit,
      unit: item.unit,
      reason: input.reason,
      occurredAt: new Date().toISOString(),
    };

    this.wasteLogs.set(record.id, record);
    return { waste: record, updatedItem };
  }

  async listWaste(tenantId: string): Promise<WasteEntry[]> {
    return [...this.wasteLogs.values()].filter(
      (waste) => waste.tenantId === tenantId,
    );
  }

  private async getStockItem(
    tenantId: string,
    stockItemId: string,
  ): Promise<StockItem> {
    const item = this.stockItems.get(stockItemId);
    if (!item || item.tenantId !== tenantId) {
      throw new Error('Stock item not found');
    }
    return item;
  }

  private async updateStockQuantity(
    tenantId: string,
    stockItemId: string,
    quantityDelta: number,
    unit: Unit,
  ): Promise<StockItem> {
    const item = await this.getStockItem(tenantId, stockItemId);
    const deltaInItemUnit = this.toItemUnit(item.unit, unit, quantityDelta);
    const updated = {
      ...item,
      currentQuantity: Math.max(0, item.currentQuantity + deltaInItemUnit),
      updatedAt: new Date().toISOString(),
    };
    this.stockItems.set(stockItemId, updated);
    this.stockItemsByTenantAndName.set(
      this.stockItemNameKey(tenantId, item.name),
      updated,
    );
    return updated;
  }

  private stockItemNameKey(tenantId: string, name: string): string {
    return `${tenantId}:${name.toLowerCase()}`;
  }

  private toItemUnit(targetUnit: Unit, fromUnit: Unit, quantity: number): number {
    if (targetUnit === fromUnit) {
      return quantity;
    }
    if (!canConvert(fromUnit, targetUnit)) {
      throw new Error(
        `Cannot convert from ${fromUnit} to ${targetUnit}; incompatible units`,
      );
    }
    return convertUnit(quantity, fromUnit, targetUnit);
  }
}
