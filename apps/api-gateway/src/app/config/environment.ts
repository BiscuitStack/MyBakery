import { z } from 'zod';

export const gatewayEnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
});

export type GatewayEnvironmentVariables = z.infer<typeof gatewayEnvSchema>;
