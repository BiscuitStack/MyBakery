import { Unit } from '@bakewise/units';

export interface CreateStockItemRequest extends Record<string, unknown> {
  name: string;
  unit: Unit;
  reorderLevel: number;
  categories?: string[];
  openingQuantity?: number;
}

export interface StockItemResponse {
  id: string;
  name: string;
  unit: Unit;
  reorderLevel: number;
  categories: string[];
  currentQuantity: number;
  createdAt: string;
  updatedAt: string;
}
