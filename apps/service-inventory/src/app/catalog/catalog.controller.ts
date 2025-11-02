import { Body, Controller, Get, HttpCode, HttpException, Post } from '@nestjs/common';
import { ApiResponse } from '@bakewise/contracts';

import { TenantId } from '../shared/tenant.decorator';
import { toHttpException } from '../shared/http-exception.util';
import { CatalogService } from './catalog.service';
import { StockItemResponse } from './dto/create-stock-item.dto';

@Controller('stock-items')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Post()
  @HttpCode(201)
  async create(
    @TenantId() tenantId: string,
    @Body() body: Record<string, unknown>,
  ): Promise<ApiResponse<StockItemResponse>> {
    try {
      const data = await this.catalogService.createStockItem(tenantId, body);
      return this.wrapResponse(data);
    } catch (error) {
      throw this.normalizeError(error);
    }
  }

  @Get()
  async list(
    @TenantId() tenantId: string,
  ): Promise<ApiResponse<StockItemResponse[]>> {
    try {
      const data = await this.catalogService.listStockItems(tenantId);
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
