import { Injectable } from '@nestjs/common';

import { InventoryRepository } from '../persistence/inventory.repository';

export interface LowStockAlert {
  stockItemId: string;
  name: string;
  currentQuantity: number;
  reorderLevel: number;
  unit: string;
}

@Injectable()
export class AlertsService {
  constructor(private readonly repository: InventoryRepository) {}

  async listLowStock(tenantId: string): Promise<LowStockAlert[]> {
    const items = await this.repository.listLowStock(tenantId);
    return items.map((item) => ({
      stockItemId: item.id,
      name: item.name,
      currentQuantity: item.currentQuantity,
      reorderLevel: item.reorderLevel,
      unit: item.unit,
    }));
  }
}
