import { Unit } from '@bakewise/units';

export interface PurchaseLineRequest extends Record<string, unknown> {
  stockItemId: string;
  quantity: number;
  unit: Unit;
  unitCost: number;
}

export interface LogPurchaseRequest extends Record<string, unknown> {
  supplierName?: string;
  reference?: string;
  lines: PurchaseLineRequest[];
}

export interface PurchaseLineResponse {
  stockItemId: string;
  quantity: number;
  unit: Unit;
  unitCost: number;
  totalCost: number;
}

export interface PurchaseResponse {
  id: string;
  supplierName?: string;
  reference?: string;
  occurredAt: string;
  totalCost: number;
  lines: PurchaseLineResponse[];
}
