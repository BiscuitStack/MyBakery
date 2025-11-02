import { Body, Controller, Get, HttpCode, HttpException, Post } from '@nestjs/common';
import { ApiResponse } from '@bakewise/contracts';

import { TenantId } from '../shared/tenant.decorator';
import { toHttpException } from '../shared/http-exception.util';
import { PurchasesService } from './purchases.service';
import { PurchaseResponse } from './dto/log-purchase.dto';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  @HttpCode(201)
  async logPurchase(
    @TenantId() tenantId: string,
    @Body() body: Record<string, unknown>,
  ): Promise<ApiResponse<PurchaseResponse>> {
    try {
      const data = await this.purchasesService.logPurchase(tenantId, body);
      return this.wrapResponse(data);
    } catch (error) {
      throw this.normalizeError(error);
    }
  }

  @Get()
  async list(
    @TenantId() tenantId: string,
  ): Promise<ApiResponse<PurchaseResponse[]>> {
    try {
      const data = await this.purchasesService.listPurchases(tenantId);
      return this.wrapResponse(data);
    } catch (error) {
      throw this.normalizeError(error);
    }
  }

  private wrapResponse<T>(data: T): ApiResponse<T> {
    return {
      data,
      meta: { generatedAt: new Date().toISOString() },
    };
  }

  private normalizeError(error: unknown): HttpException {
    return toHttpException(error);
  }
}
