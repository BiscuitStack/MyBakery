import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { InventoryModule } from './inventory.module';
import { inventoryEnvSchema } from './config/environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: (env) => inventoryEnvSchema.parse(env),
    }),
    InventoryModule,
  ],
})
export class AppModule {}
