import { AlertsService } from '../alerts/alerts.service';
import { CatalogService } from '../catalog/catalog.service';
import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import { InMemoryInventoryRepository } from '../persistence/in-memory-inventory.repository';
import { PurchasesService } from '../purchases/purchases.service';

describe('AlertsService', () => {
  let repository: InMemoryInventoryRepository;
  let alertsService: AlertsService;
  let catalogService: CatalogService;
  let purchasesService: PurchasesService;

  beforeEach(async () => {
    repository = new InMemoryInventoryRepository();
    const publisher = { publish: jest.fn().mockResolvedValue(undefined) } as unknown as DomainEventPublisher;
    alertsService = new AlertsService(repository);
    catalogService = new CatalogService(repository, publisher);
    purchasesService = new PurchasesService(repository, publisher);

    const item = await catalogService.createStockItem('tenant-1', {
      name: 'Yeast',
      unit: 'g',
      reorderLevel: 200,
      categories: [],
    });

    await purchasesService.logPurchase('tenant-1', {
      lines: [
        {
          stockItemId: item.id,
          quantity: 150,
          unit: 'g',
          unitCost: 0.5,
        },
      ],
    });
  });

  it('returns low stock alerts when below threshold', async () => {
    const alertsBefore = await alertsService.listLowStock('tenant-1');
    expect(alertsBefore).toHaveLength(1);
    expect(alertsBefore[0].currentQuantity).toBe(150);

    // Top up stock above threshold
    await purchasesService.logPurchase('tenant-1', {
      lines: [
        {
          stockItemId: (await repository.listStockItems('tenant-1'))[0].id,
          quantity: 100,
          unit: 'g',
          unitCost: 0.5,
        },
      ],
    });

    const alertsAfter = await alertsService.listLowStock('tenant-1');
    expect(alertsAfter).toHaveLength(0);
  });
});
