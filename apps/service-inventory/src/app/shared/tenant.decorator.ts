import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';

export const TenantId = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const tenantId =
      request.headers['x-tenant-id'] ??
      request.headers['X-Tenant-Id'];
    if (!tenantId || typeof tenantId !== 'string') {
      throw new BadRequestException('Missing x-tenant-id header');
    }
    return tenantId;
  },
);
