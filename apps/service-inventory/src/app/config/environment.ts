import { z } from 'zod';

export const inventoryEnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
  INVENTORY_DATABASE_URL: z.string().min(1).optional(),
  USE_IN_MEMORY_REPOSITORIES: z.coerce.boolean().default(false),
  JEST_WORKER_ID: z.string().optional(),
});

export type InventoryEnvironmentVariables = z.infer<typeof inventoryEnvSchema>;
