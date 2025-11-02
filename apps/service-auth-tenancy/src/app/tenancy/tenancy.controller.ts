import { Body, Controller, HttpCode, HttpException, Post } from '@nestjs/common';
import { ApiResponse } from '@bakewise/contracts';

import { toHttpException } from '../shared/http-exception.util';
import { TenancyService } from './tenancy.service';
import { ProvisionTenantResult } from './dto/provision-tenant.dto';

@Controller('tenants')
export class TenancyController {
  constructor(private readonly tenancyService: TenancyService) {}

  @Post('provision')
  @HttpCode(201)
  async provision(
    @Body() body: Record<string, unknown>,
  ): Promise<ApiResponse<ProvisionTenantResult>> {
    try {
      const data = await this.tenancyService.provisionTenant(body);
      return this.wrapResponse(data);
    } catch (error) {
      throw this.normalizeError(error);
    }
  }

  private wrapResponse<T>(data: T): ApiResponse<T> {
    return {
      data,
      meta: {
        generatedAt: new Date().toISOString(),
      },
    };
  }

  private normalizeError(error: unknown): HttpException {
    return toHttpException(error);
  }
}
