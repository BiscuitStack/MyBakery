/* eslint-disable @nx/enforce-module-boundaries */
import { PrismaClient } from '@bakewise/database/generated/inventory-client';

let inventoryPrisma: PrismaClient | null = null;

export const getInventoryPrismaClient = (): PrismaClient => {
  if (!inventoryPrisma) {
    if (!process.env.INVENTORY_DATABASE_URL) {
      throw new Error('INVENTORY_DATABASE_URL environment variable must be set before initializing Prisma');
    }
    inventoryPrisma = new PrismaClient();
  }
  return inventoryPrisma;
};

export type InventoryPrismaClient = PrismaClient;
