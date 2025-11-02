import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiResponse } from '@bakewise/contracts';

import { TenantId } from '../shared/tenant.decorator';
import { toHttpException } from '../shared/http-exception.util';
import { AlertsService, LowStockAlert } from './alerts.service';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get('low-stock')
  async lowStock(
    @TenantId() tenantId: string,
  ): Promise<ApiResponse<LowStockAlert[]>> {
    try {
      const data = await this.alertsService.listLowStock(tenantId);
      return {
        data,
        meta: { generatedAt: new Date().toISOString() },
      };
    } catch (error) {
      throw this.normalizeError(error);
    }
  }

  private normalizeError(error: unknown): HttpException {
    return toHttpException(error);
  }
}
