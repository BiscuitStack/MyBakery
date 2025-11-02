import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { SecretsModule } from './config/secrets.module';
import { TenancyModule } from './tenancy/tenancy.module';

@Module({
  imports: [SecretsModule, TenancyModule, AuthModule],
})
export class AppModule {}
