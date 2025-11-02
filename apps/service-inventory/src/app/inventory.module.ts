import { Module } from '@nestjs/common';

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

const inventoryRepositoryProvider = {
  provide: InventoryRepository,
  useFactory: () => {
    if (
      process.env.INVENTORY_DATABASE_URL &&
      process.env.USE_IN_MEMORY_REPOSITORIES !== 'true' &&
      typeof process.env.JEST_WORKER_ID === 'undefined'
    ) {
      return new PrismaInventoryRepository();
    }
    return new InMemoryInventoryRepository();
  },
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
