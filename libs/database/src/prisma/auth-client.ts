/* eslint-disable @nx/enforce-module-boundaries */
import { PrismaClient } from '@bakewise/database/generated/auth-client';

let authPrisma: PrismaClient | null = null;

export const getAuthPrismaClient = (databaseUrl: string): PrismaClient => {
  if (!databaseUrl) {
    throw new Error(
      'AUTH_DATABASE_URL must be provided before initializing Prisma',
    );
  }

  if (!authPrisma) {
    authPrisma = new PrismaClient({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
    });
  }

  return authPrisma;
};

export type AuthPrismaClient = PrismaClient;
