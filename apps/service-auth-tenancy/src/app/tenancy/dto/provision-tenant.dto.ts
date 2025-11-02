export interface ProvisionTenantRequest extends Record<string, unknown> {
  secret: string;
  tenantName: string;
  tenantSlug: string;
  ownerName: string;
  ownerEmail: string;
}

export interface ProvisionTenantResult {
  tenantId: string;
  tenantSlug: string;
  tenantName: string;
  ownerUserId: string;
  ownerEmail: string;
  ownerDisplayName: string;
  ownerTemporaryPassword: string;
}
