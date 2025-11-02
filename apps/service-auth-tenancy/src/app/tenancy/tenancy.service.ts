import { Inject, Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { BakewiseError, ErrorCode } from '@bakewise/common-errors';
import { Schema, validate } from '@bakewise/validation';

import { PROVISIONING_SECRET_TOKEN } from '../app.tokens';
import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import { TenancyRepository } from '../persistence/tenancy.repository';
import {
  ProvisionTenantRequest,
  ProvisionTenantResult,
} from './dto/provision-tenant.dto';

const PROVISION_TENANT_SCHEMA: Schema<ProvisionTenantRequest> = {
  secret: { type: 'string', trim: true, min: 8 },
  tenantName: { type: 'string', trim: true, min: 2 },
  tenantSlug: {
    type: 'string',
    trim: true,
    pattern: /^[a-z0-9-]+$/,
    min: 3,
  },
  ownerName: { type: 'string', trim: true, min: 2 },
  ownerEmail: {
    type: 'string',
    trim: true,
    pattern:
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
} as const;

@Injectable()
export class TenancyService {
  constructor(
    private readonly repository: TenancyRepository,
    private readonly eventPublisher: DomainEventPublisher,
    @Inject(PROVISIONING_SECRET_TOKEN)
    private readonly provisioningSecret: string,
  ) {}

  async provisionTenant(
    request: Record<string, unknown>,
  ): Promise<ProvisionTenantResult> {
    const validation = validate<ProvisionTenantRequest>(
      request,
      PROVISION_TENANT_SCHEMA,
    );

    if (!validation.success) {
      throw new BakewiseError(
        400,
        ErrorCode.INVALID_INPUT,
        'Invalid provisioning request',
        (validation as Extract<typeof validation, { success: false }>).issues,
      );
    }

    const data = validation.data;

    if (data.secret !== this.provisioningSecret) {
      throw new BakewiseError(
        403,
        ErrorCode.FORBIDDEN,
        'Provisioning secret is invalid',
      );
    }

    const slug = data.tenantSlug.toLowerCase();
    if (await this.repository.isTenantSlugTaken(slug)) {
      throw new BakewiseError(
        409,
        ErrorCode.CONFLICT,
        'Tenant slug already in use',
        { slug },
      );
    }

    const ownerPassword = this.generateTemporaryPassword();

    const { tenant, owner } = await this.repository.createTenantWithOwner({
      name: data.tenantName,
      slug,
      ownerName: data.ownerName,
      ownerEmail: data.ownerEmail,
      ownerPassword,
    });

    await this.eventPublisher.publish(
      {
        context: 'auth',
        entity: 'tenant',
        event: 'provisioned',
        version: 1,
      },
      {
        tenantId: tenant.id,
        slug: tenant.slug,
        ownerUserId: owner.id,
        ownerEmail: owner.email,
        occurredAt: new Date().toISOString(),
      },
    );

    return {
      tenantId: tenant.id,
      tenantSlug: tenant.slug,
      tenantName: tenant.name,
      ownerUserId: owner.id,
      ownerEmail: owner.email,
      ownerDisplayName: owner.displayName,
      ownerTemporaryPassword: ownerPassword,
    };
  }

  private generateTemporaryPassword(): string {
    return randomBytes(9).toString('base64url');
  }
}
