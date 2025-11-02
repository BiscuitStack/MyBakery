export interface TenantRecord {
  id: string;
  slug: string;
  name: string;
  createdAt: string;
}

export interface UserRecord {
  id: string;
  tenantId: string;
  email: string;
  displayName: string;
  roles: string[];
  passwordHash: string;
  createdAt: string;
}

export interface CreateTenantInput {
  slug: string;
  name: string;
  ownerName: string;
  ownerEmail: string;
  ownerPassword: string;
}

export abstract class TenancyRepository {
  abstract createTenantWithOwner(input: CreateTenantInput): Promise<{
    tenant: TenantRecord;
    owner: UserRecord;
  }>;

  abstract findTenantBySlug(slug: string): Promise<TenantRecord | undefined>;

  abstract isTenantSlugTaken(slug: string): Promise<boolean>;

  abstract findUserByEmail(
    tenantId: string,
    email: string,
  ): Promise<UserRecord | undefined>;

  abstract verifyPassword(user: UserRecord, password: string): Promise<boolean>;
}
