import { Unit } from '@bakewise/units';

export interface StockItem {
  id: string;
  tenantId: string;
  name: string;
  unit: Unit;
  reorderLevel: number;
  categories: string[];
  currentQuantity: number;
  createdAt: string;
  updatedAt: string;
}

export interface PurchaseLine {
  stockItemId: string;
  quantity: number;
  unit: Unit;
  unitCost: number;
  totalCost: number;
}

export interface Purchase {
  id: string;
  tenantId: string;
  supplierName: string | null;
  reference: string | null;
  occurredAt: string;
  totalCost: number;
  lines: PurchaseLine[];
}

export interface WasteEntry {
  id: string;
  tenantId: string;
  stockItemId: string;
  quantity: number;
  unit: Unit;
  reason: string;
  occurredAt: string;
}

export interface CreateStockItemInput {
  tenantId: string;
  name: string;
  unit: Unit;
  reorderLevel: number;
  categories: string[];
  openingQuantity?: number;
}

export interface PurchaseInput {
  tenantId: string;
  supplierName?: string;
  reference?: string;
  lines: Array<{
    stockItemId: string;
    quantity: number;
    unit: Unit;
    unitCost: number;
  }>;
}

export interface WasteInput {
  tenantId: string;
  stockItemId: string;
  quantity: number;
  unit: Unit;
  reason: string;
}

export abstract class InventoryRepository {
  abstract createStockItem(input: CreateStockItemInput): Promise<StockItem>;
  abstract listStockItems(tenantId: string): Promise<StockItem[]>;
  abstract listLowStock(tenantId: string): Promise<StockItem[]>;
  abstract logPurchase(
    input: PurchaseInput,
  ): Promise<{ purchase: Purchase; updatedItems: StockItem[] }>;
  abstract listPurchases(tenantId: string): Promise<Purchase[]>;
  abstract logWaste(
    input: WasteInput,
  ): Promise<{ waste: WasteEntry; updatedItem: StockItem }>;
  abstract listWaste(tenantId: string): Promise<WasteEntry[]>;
}
