import { Global, Logger, Module } from '@nestjs/common';

import {
  DEFAULT_JWT_SECRET,
  DEFAULT_PROVISIONING_SECRET,
  JWT_SECRET_TOKEN,
  PROVISIONING_SECRET_TOKEN,
} from '../app.tokens';

@Global()
@Module({
  providers: [
    {
      provide: PROVISIONING_SECRET_TOKEN,
      useFactory: () => {
        const secret =
          process.env.AUTH_PROVISIONING_SECRET ?? DEFAULT_PROVISIONING_SECRET;
        if (!process.env.AUTH_PROVISIONING_SECRET) {
          Logger.warn(
            'AUTH_PROVISIONING_SECRET not set. Using dev default — do not use in production.',
            'SecretsModule',
          );
        }
        return secret;
      },
    },
    {
      provide: JWT_SECRET_TOKEN,
      useFactory: () => {
        const secret = process.env.AUTH_JWT_SECRET ?? DEFAULT_JWT_SECRET;
        if (!process.env.AUTH_JWT_SECRET) {
          Logger.warn(
            'AUTH_JWT_SECRET not set. Using dev default — do not use in production.',
            'SecretsModule',
          );
        }
        return secret;
      },
    },
  ],
  exports: [PROVISIONING_SECRET_TOKEN, JWT_SECRET_TOKEN],
})
export class SecretsModule {}
