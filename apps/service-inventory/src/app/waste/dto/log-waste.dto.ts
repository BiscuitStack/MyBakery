import { Unit } from '@bakewise/units';

export interface LogWasteRequest extends Record<string, unknown> {
  stockItemId: string;
  quantity: number;
  unit: Unit;
  reason: string;
}

export interface WasteResponse {
  id: string;
  stockItemId: string;
  quantity: number;
  unit: Unit;
  reason: string;
  occurredAt: string;
}
