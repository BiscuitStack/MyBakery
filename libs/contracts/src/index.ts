import type { BakewiseErrorResponse } from '@bakewise/common-errors';

export const ORDER_STATUSES = ['PENDING', 'READY', 'DELIVERED'] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const PAYMENT_STATUSES = [
  'UNPAID',
  'DEPOSIT_RECEIVED',
  'PAID',
] as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const PRODUCTION_TASK_STATUSES = [
  'PENDING',
  'IN_PROGRESS',
  'COMPLETE',
] as const;
export type ProductionTaskStatus = (typeof PRODUCTION_TASK_STATUSES)[number];

export const PRODUCTION_PLAN_STATUSES = ['DRAFT', 'FINALIZED'] as const;
export type ProductionPlanStatus = (typeof PRODUCTION_PLAN_STATUSES)[number];

export const WASTE_REASONS = ['EXPIRED', 'DAMAGED', 'OVERPRODUCTION', 'OTHER'] as const;
export type WasteReason = (typeof WASTE_REASONS)[number];

export interface TenantScopedRequestContext {
  tenantId: string;
  userId: string;
  roles: string[];
}

export interface ResponseMeta {
  generatedAt: string; // ISO timestamp
  requestId?: string;
}

export interface ApiResponse<T> {
  data: T;
  meta: ResponseMeta;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: ResponseMeta & {
    total: number;
    limit: number;
    offset: number;
  };
}

export type ErrorResponse<TDetails = unknown> = BakewiseErrorResponse<TDetails>;

export interface HealthCheckResponse extends ApiResponse<{ status: 'ok' }> {}

export interface OutboxEventEnvelope<TPayload = unknown> {
  id: string;
  routingKey: string;
  payload: TPayload;
  occurredAt: string;
  tenantId?: string;
  correlationId?: string;
}
