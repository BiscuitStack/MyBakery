import { Body, Controller, Get, HttpCode, HttpException, Post } from '@nestjs/common';
import { ApiResponse } from '@bakewise/contracts';

import { TenantId } from '../shared/tenant.decorator';
import { toHttpException } from '../shared/http-exception.util';
import { WasteService } from './waste.service';
import { WasteResponse } from './dto/log-waste.dto';

@Controller('waste')
export class WasteController {
  constructor(private readonly wasteService: WasteService) {}

  @Post()
  @HttpCode(201)
  async logWaste(
    @TenantId() tenantId: string,
    @Body() body: Record<string, unknown>,
  ): Promise<ApiResponse<WasteResponse>> {
    try {
      const data = await this.wasteService.logWaste(tenantId, body);
      return this.wrapResponse(data);
    } catch (error) {
      throw this.normalizeError(error);
    }
  }

  @Get()
  async list(
    @TenantId() tenantId: string,
  ): Promise<ApiResponse<WasteResponse[]>> {
    try {
      const data = await this.wasteService.listWaste(tenantId);
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
