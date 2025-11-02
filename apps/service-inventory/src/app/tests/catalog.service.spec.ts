import { CatalogService } from '../catalog/catalog.service';
import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import { InMemoryInventoryRepository } from '../persistence/in-memory-inventory.repository';

describe('CatalogService', () => {
  let repository: InMemoryInventoryRepository;
  let publishSpy: jest.Mock;
  let service: CatalogService;

  beforeEach(() => {
    repository = new InMemoryInventoryRepository();
    publishSpy = jest.fn().mockResolvedValue(undefined);
    service = new CatalogService(repository, {
      publish: publishSpy,
    } as unknown as DomainEventPublisher);
  });

  it('creates a stock item and emits event', async () => {
    const result = await service.createStockItem('tenant-1', {
      name: 'Flour',
      unit: 'kg',
      reorderLevel: 5,
      categories: ['dry-goods'],
      openingQuantity: 10,
    });

    expect(result.name).toBe('Flour');
    expect(result.unit).toBe('kg');
    expect(result.currentQuantity).toBe(10);
    expect(publishSpy).toHaveBeenCalledWith(
      expect.objectContaining({ entity: 'stock-item' }),
      expect.objectContaining({ stockItemId: result.id }),
    );
  });

  it('lists stock items per tenant', async () => {
    await service.createStockItem('tenant-1', {
      name: 'Butter',
      unit: 'kg',
      reorderLevel: 2,
      categories: [],
    });
    await service.createStockItem('tenant-2', {
      name: 'Sugar',
      unit: 'kg',
      reorderLevel: 3,
      categories: [],
    });

    const items = await service.listStockItems('tenant-1');
    expect(items).toHaveLength(1);
    expect(items[0].name).toBe('Butter');
  });

  it('throws conflict when duplicate name', async () => {
    await service.createStockItem('tenant-1', {
      name: 'Eggs',
      unit: 'unit',
      reorderLevel: 10,
      categories: [],
    });

    await expect(
      service.createStockItem('tenant-1', {
        name: 'Eggs',
        unit: 'unit',
        reorderLevel: 10,
        categories: [],
      }),
    ).rejects.toThrow(/already exists/);
  });
});
