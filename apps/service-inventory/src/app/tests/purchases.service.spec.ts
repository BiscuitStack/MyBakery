import { PurchasesService } from '../purchases/purchases.service';
import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import { CatalogService } from '../catalog/catalog.service';
import { InMemoryInventoryRepository } from '../persistence/in-memory-inventory.repository';

describe('PurchasesService', () => {
  let repository: InMemoryInventoryRepository;
  let catalog: CatalogService;
  let purchases: PurchasesService;
  let publishSpy: jest.Mock;

  beforeEach(async () => {
    repository = new InMemoryInventoryRepository();
    publishSpy = jest.fn().mockResolvedValue(undefined);
    const publisher = { publish: publishSpy } as unknown as DomainEventPublisher;
    catalog = new CatalogService(repository, publisher);
    purchases = new PurchasesService(repository, publisher);

    await catalog.createStockItem('tenant-1', {
      name: 'Flour',
      unit: 'kg',
      reorderLevel: 5,
      categories: [],
    });
  });

  it('records a purchase and updates stock levels', async () => {
    const itemId = (await repository.listStockItems('tenant-1'))[0].id;
    const result = await purchases.logPurchase('tenant-1', {
      lines: [
        {
          stockItemId: itemId,
          quantity: 2,
          unit: 'kg',
          unitCost: 40,
        },
      ],
    });

    expect(result.totalCost).toBe(80);
    expect(result.lines[0].quantity).toBe(2);
    const item = (await repository.listStockItems('tenant-1'))[0];
    expect(item.currentQuantity).toBe(2);
    expect(publishSpy).toHaveBeenCalledWith(
      expect.objectContaining({ entity: 'stock-level' }),
      expect.objectContaining({ stockItemId: item.id }),
    );
  });

  it('rejects empty lines', async () => {
    await expect(
      purchases.logPurchase('tenant-1', { lines: [] }),
    ).rejects.toThrow(/requires at least one line/);
  });
});
