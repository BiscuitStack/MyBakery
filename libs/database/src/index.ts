// Database utilities and Prisma helpers
export type SoftDelete = {
  deleted: boolean;
  deletedAt: Date | null;
  deletedById: string | null;
};

export const baseSoftDelete: SoftDelete = {
  deleted: false,
  deletedAt: null,
  deletedById: null
};

export { getAuthPrismaClient } from './prisma/auth-client';
export type { AuthPrismaClient } from './prisma/auth-client';
export { getInventoryPrismaClient } from './prisma/inventory-client';
export type { InventoryPrismaClient } from './prisma/inventory-client';
