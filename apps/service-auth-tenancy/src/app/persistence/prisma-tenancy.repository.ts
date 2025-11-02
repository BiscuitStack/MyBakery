import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@bakewise/database/generated/auth-client';
import { createHash } from 'crypto';

import {
  CreateTenantInput,
  TenancyRepository,
  TenantRecord,
  UserRecord,
} from './tenancy.repository';

@Injectable()
export class PrismaTenancyRepository extends TenancyRepository {
  constructor(private readonly prisma: PrismaClient) {
    super();
  }

  async createTenantWithOwner(input: CreateTenantInput): Promise<{
    tenant: TenantRecord;
    owner: UserRecord;
  }> {
    const normalizedEmail = input.ownerEmail.toLowerCase();

    const result = await this.prisma.$transaction(async (tx) => {
      const slugTaken = await tx.tenant.findUnique({ where: { slug: input.slug } });
      if (slugTaken) {
        throw new Error('Tenant slug already in use');
      }

      const tenant = await tx.tenant.create({
        data: {
          slug: input.slug,
          name: input.name,
        },
      });

      const owner = await tx.user.create({
        data: {
          tenantId: tenant.id,
          email: normalizedEmail,
          displayName: input.ownerName,
          roles: ['owner'],
          passwordHash: this.hashPassword(input.ownerPassword),
        },
      });

      return {
        tenant: this.mapTenant(tenant),
        owner: this.mapUser(owner),
      };
    });

    return result;
  }

  async findTenantBySlug(slug: string): Promise<TenantRecord | undefined> {
    const tenant = await this.prisma.tenant.findUnique({ where: { slug } });
    return tenant ? this.mapTenant(tenant) : undefined;
  }

  async isTenantSlugTaken(slug: string): Promise<boolean> {
    const tenant = await this.prisma.tenant.findUnique({ where: { slug } });
    return Boolean(tenant);
  }

  async findUserByEmail(
    tenantId: string,
    email: string,
  ): Promise<UserRecord | undefined> {
    const user = await this.prisma.user.findFirst({
      where: {
        tenantId,
        email: email.toLowerCase(),
      },
    });

    return user ? this.mapUser(user) : undefined;
  }

  async verifyPassword(user: UserRecord, password: string): Promise<boolean> {
    return user.passwordHash === this.hashPassword(password);
  }

  private mapTenant(record: {
    id: string;
    slug: string;
    name: string;
    createdAt: Date;
  }): TenantRecord {
    return {
      id: record.id,
      slug: record.slug,
      name: record.name,
      createdAt: record.createdAt.toISOString(),
    };
  }

  private mapUser(record: {
    id: string;
    tenantId: string;
    email: string;
    displayName: string;
    roles: string[];
    passwordHash: string;
    createdAt: Date;
  }): UserRecord {
    return {
      id: record.id,
      tenantId: record.tenantId,
      email: record.email,
      displayName: record.displayName,
      roles: record.roles,
      passwordHash: record.passwordHash,
      createdAt: record.createdAt.toISOString(),
    };
  }

  private hashPassword(value: string): string {
    return createHash('sha256').update(value).digest('hex');
  }
}
