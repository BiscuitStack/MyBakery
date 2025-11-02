import { z } from 'zod';

import {
  DEFAULT_JWT_SECRET,
  DEFAULT_PROVISIONING_SECRET,
} from '../app.tokens';

export const authEnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: z.coerce.number().int().positive().default(5001),
  AUTH_PROVISIONING_SECRET: z
    .string()
    .min(1)
    .default(DEFAULT_PROVISIONING_SECRET),
  AUTH_JWT_SECRET: z.string().min(1).default(DEFAULT_JWT_SECRET),
  AUTH_DATABASE_URL: z.string().min(1).optional(),
  USE_IN_MEMORY_REPOSITORIES: z.coerce.boolean().default(false),
  JEST_WORKER_ID: z.string().optional(),
});

export type AuthEnvironmentVariables = z.infer<typeof authEnvSchema>;
