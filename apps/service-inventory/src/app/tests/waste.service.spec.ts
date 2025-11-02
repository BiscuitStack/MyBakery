import { CatalogService } from '../catalog/catalog.service';
import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import { InMemoryInventoryRepository } from '../persistence/in-memory-inventory.repository';
import { PurchasesService } from '../purchases/purchases.service';
import { WasteService } from '../waste/waste.service';

describe('WasteService', () => {
  let repository: InMemoryInventoryRepository;
  let publishSpy: jest.Mock;
  let wasteService: WasteService;
  let purchasesService: PurchasesService;
  let catalogService: CatalogService;

  beforeEach(async () => {
    repository = new InMemoryInventoryRepository();
    publishSpy = jest.fn().mockResolvedValue(undefined);
    const publisher = { publish: publishSpy } as unknown as DomainEventPublisher;
    catalogService = new CatalogService(repository, publisher);
    purchasesService = new PurchasesService(repository, publisher);
    wasteService = new WasteService(repository, publisher);

    await catalogService.createStockItem('tenant-1', {
      name: 'Milk',
      unit: 'l',
      reorderLevel: 5,
      categories: [],
    });
    await purchasesService.logPurchase('tenant-1', {
      lines: [
        {
          stockItemId: (await repository.listStockItems('tenant-1'))[0].id,
          quantity: 10,
          unit: 'l',
          unitCost: 20,
        },
      ],
    });
  });

  it('logs waste and decrements stock', async () => {
    const itemId = (await repository.listStockItems('tenant-1'))[0].id;
    const result = await wasteService.logWaste('tenant-1', {
      stockItemId: itemId,
      quantity: 2,
      unit: 'l',
      reason: 'Expired',
    });

    expect(result.quantity).toBe(2);
    const item = (await repository.listStockItems('tenant-1'))[0];
    expect(item.currentQuantity).toBe(8);
    expect(publishSpy).toHaveBeenCalledWith(
      expect.objectContaining({ entity: 'waste' }),
      expect.objectContaining({ stockItemId: itemId }),
    );
  });
});
