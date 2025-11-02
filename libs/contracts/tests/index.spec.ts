import {
  ApiResponse,
  ApiResponse as ApiResponseType,
  ORDER_STATUSES,
  PAYMENT_STATUSES,
  PRODUCTION_PLAN_STATUSES,
  PRODUCTION_TASK_STATUSES,
  WASTE_REASONS,
} from '../src';

describe('contracts shared shapes', () => {
  it('exposes enumerations aligned with the PRD', () => {
    expect(ORDER_STATUSES).toEqual(['PENDING', 'READY', 'DELIVERED']);
    expect(PAYMENT_STATUSES).toContain('UNPAID');
    expect(PRODUCTION_TASK_STATUSES).toContain('IN_PROGRESS');
    expect(PRODUCTION_PLAN_STATUSES).toEqual(['DRAFT', 'FINALIZED']);
    expect(WASTE_REASONS).toContain('OVERPRODUCTION');
  });

  it('describes API response envelope', () => {
    const response: ApiResponse<{ status: 'ok' }> = {
      data: { status: 'ok' },
      meta: { generatedAt: new Date().toISOString() },
    };

    expect((response as ApiResponseType<{ status: 'ok' }>).data.status).toBe(
      'ok',
    );
  });
});
