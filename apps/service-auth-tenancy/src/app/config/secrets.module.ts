import { Global, Logger, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
  DEFAULT_JWT_SECRET,
  DEFAULT_PROVISIONING_SECRET,
  JWT_SECRET_TOKEN,
  PROVISIONING_SECRET_TOKEN,
} from '../app.tokens';
import { AuthEnvironmentVariables } from './environment';

@Global()
@Module({
  providers: [
    {
      provide: PROVISIONING_SECRET_TOKEN,
      useFactory: (configService: ConfigService<AuthEnvironmentVariables>) => {
        const secret = configService.get('AUTH_PROVISIONING_SECRET', {
          infer: true,
        });

        if (secret === DEFAULT_PROVISIONING_SECRET) {
          Logger.warn(
            'AUTH_PROVISIONING_SECRET not set. Using dev default — do not use in production.',
            'SecretsModule',
          );
        }

        return secret;
      },
      inject: [ConfigService],
    },
    {
      provide: JWT_SECRET_TOKEN,
      useFactory: (configService: ConfigService<AuthEnvironmentVariables>) => {
        const secret = configService.get('AUTH_JWT_SECRET', {
          infer: true,
        });

        if (secret === DEFAULT_JWT_SECRET) {
          Logger.warn(
            'AUTH_JWT_SECRET not set. Using dev default — do not use in production.',
            'SecretsModule',
          );
        }

        return secret;
      },
      inject: [ConfigService],
    },
  ],
  exports: [PROVISIONING_SECRET_TOKEN, JWT_SECRET_TOKEN],
})
export class SecretsModule {}
