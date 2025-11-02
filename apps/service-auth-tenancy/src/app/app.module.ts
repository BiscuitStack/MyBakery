import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { authEnvSchema } from './config/environment';
import { SecretsModule } from './config/secrets.module';
import { TenancyModule } from './tenancy/tenancy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: (env) => authEnvSchema.parse(env),
    }),
    SecretsModule,
    TenancyModule,
    AuthModule,
  ],
})
export class AppModule {}
