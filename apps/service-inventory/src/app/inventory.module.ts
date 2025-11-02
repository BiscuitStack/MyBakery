import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getInventoryPrismaClient } from '@bakewise/database';

import { AlertsController } from './alerts/alerts.controller';
import { AlertsService } from './alerts/alerts.service';
import { CatalogController } from './catalog/catalog.controller';
import { CatalogService } from './catalog/catalog.service';
import { DomainEventPublisher } from './infrastructure/domain-event.publisher';
import { InventoryRepository } from './persistence/inventory.repository';
import { InMemoryInventoryRepository } from './persistence/in-memory-inventory.repository';
import { PrismaInventoryRepository } from './persistence/prisma-inventory.repository';
import { PurchasesController } from './purchases/purchases.controller';
import { PurchasesService } from './purchases/purchases.service';
import { WasteController } from './waste/waste.controller';
import { WasteService } from './waste/waste.service';
import { InventoryEnvironmentVariables } from './config/environment';

const inventoryRepositoryProvider = {
  provide: InventoryRepository,
  useFactory: (
    configService: ConfigService<InventoryEnvironmentVariables>,
  ) => {
    const databaseUrl =
      configService.get<string>('INVENTORY_DATABASE_URL') ?? null;
    const useInMemory = configService.get<boolean>(
      'USE_IN_MEMORY_REPOSITORIES',
      { infer: true },
    );
    const jestWorkerId = configService.get<string>('JEST_WORKER_ID');

    if (
      databaseUrl &&
      !useInMemory &&
      typeof jestWorkerId === 'undefined'
    ) {
      return new PrismaInventoryRepository(
        getInventoryPrismaClient(databaseUrl),
      );
    }
    return new InMemoryInventoryRepository();
  },
  inject: [ConfigService],
};

@Module({
  controllers: [CatalogController, PurchasesController, AlertsController, WasteController],
  providers: [
    inventoryRepositoryProvider,
    DomainEventPublisher,
    CatalogService,
    PurchasesService,
    AlertsService,
    WasteService,
  ],
})
export class InventoryModule {}
