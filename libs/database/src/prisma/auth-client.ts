/* eslint-disable @nx/enforce-module-boundaries */
import { PrismaClient } from '@bakewise/database/generated/auth-client';

let authPrisma: PrismaClient | null = null;

export const getAuthPrismaClient = (): PrismaClient => {
  if (!authPrisma) {
    if (!process.env.AUTH_DATABASE_URL) {
      throw new Error('AUTH_DATABASE_URL environment variable must be set before initializing Prisma');
    }
    authPrisma = new PrismaClient();
  }
  return authPrisma;
};

export type AuthPrismaClient = PrismaClient;
