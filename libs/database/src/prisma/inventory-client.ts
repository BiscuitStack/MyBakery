/* eslint-disable @nx/enforce-module-boundaries */
import { PrismaClient } from '@bakewise/database/generated/inventory-client';

let inventoryPrisma: PrismaClient | null = null;

export const getInventoryPrismaClient = (databaseUrl: string): PrismaClient => {
  if (!databaseUrl) {
    throw new Error(
      'INVENTORY_DATABASE_URL must be provided before initializing Prisma',
    );
  }

  if (!inventoryPrisma) {
    inventoryPrisma = new PrismaClient({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
    });
  }

  return inventoryPrisma;
};

export type InventoryPrismaClient = PrismaClient;
