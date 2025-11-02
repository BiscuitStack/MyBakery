import { Injectable } from '@nestjs/common';
import { createHash, randomUUID } from 'crypto';

import {
  CreateTenantInput,
  TenancyRepository,
  TenantRecord,
  UserRecord,
} from './tenancy.repository';

@Injectable()
export class InMemoryTenancyRepository extends TenancyRepository {
  private readonly tenantsById = new Map<string, TenantRecord>();
  private readonly tenantsBySlug = new Map<string, TenantRecord>();
  private readonly usersById = new Map<string, UserRecord>();
  private readonly usersByTenantAndEmail = new Map<string, UserRecord>();

  async createTenantWithOwner(input: CreateTenantInput): Promise<{
    tenant: TenantRecord;
    owner: UserRecord;
  }> {
    const createdAt = new Date().toISOString();
    const normalizedEmail = input.ownerEmail.toLowerCase();
    const tenant: TenantRecord = {
      id: randomUUID(),
      slug: input.slug,
      name: input.name,
      createdAt,
    };

    const owner: UserRecord = {
      id: randomUUID(),
      tenantId: tenant.id,
      email: normalizedEmail,
      displayName: input.ownerName,
      roles: ['owner'],
      passwordHash: this.hashPassword(input.ownerPassword),
      createdAt,
    };

    this.tenantsById.set(tenant.id, tenant);
    this.tenantsBySlug.set(tenant.slug, tenant);

    this.usersById.set(owner.id, owner);
    this.usersByTenantAndEmail.set(
      this.userKey(owner.tenantId, owner.email),
      owner,
    );

    return { tenant, owner };
  }

  async findTenantBySlug(slug: string): Promise<TenantRecord | undefined> {
    return this.tenantsBySlug.get(slug);
  }

  async isTenantSlugTaken(slug: string): Promise<boolean> {
    return this.tenantsBySlug.has(slug);
  }

  async findUserByEmail(
    tenantId: string,
    email: string,
  ): Promise<UserRecord | undefined> {
    return this.usersByTenantAndEmail.get(this.userKey(tenantId, email));
  }

  async verifyPassword(user: UserRecord, password: string): Promise<boolean> {
    return user.passwordHash === this.hashPassword(password);
  }

  private userKey(tenantId: string, email: string): string {
    return `${tenantId}:${email.toLowerCase()}`;
  }

  private hashPassword(value: string): string {
    return createHash('sha256').update(value).digest('hex');
  }
}
