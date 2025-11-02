import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@bakewise/database/generated/inventory-client';
import { Unit, canConvert, convertUnit } from '@bakewise/units';

import {
  CreateStockItemInput,
  InventoryRepository,
  Purchase,
  PurchaseInput,
  StockItem,
  WasteEntry,
  WasteInput,
} from './inventory.repository';

@Injectable()
export class PrismaInventoryRepository extends InventoryRepository {
  constructor(private readonly prisma: PrismaClient) {
    super();
  }

  async createStockItem(input: CreateStockItemInput): Promise<StockItem> {
    try {
      const record = await this.prisma.stockItem.create({
        data: {
          tenantId: input.tenantId,
          name: input.name,
          unit: input.unit,
          reorderLevel: this.toDecimal(input.reorderLevel),
          categories: input.categories,
          currentQuantity: this.toDecimal(input.openingQuantity ?? 0),
        },
      });

      return this.mapStockItem(record);
    } catch (error) {
      this.handlePrismaError(error);
    }
  }

  async listStockItems(tenantId: string): Promise<StockItem[]> {
    const records = await this.prisma.stockItem.findMany({
      where: {
        tenantId,
        deleted: false,
      },
      orderBy: { name: 'asc' },
    });

    return records.map((record) => this.mapStockItem(record));
  }

  async listLowStock(tenantId: string): Promise<StockItem[]> {
    const items = await this.listStockItems(tenantId);
    return items.filter((item) => item.currentQuantity <= item.reorderLevel);
  }

  async logPurchase(
    input: PurchaseInput,
  ): Promise<{ purchase: Purchase; updatedItems: StockItem[] }> {
    const result = await this.prisma.$transaction(async (tx) => {
      const updatedItems: StockItem[] = [];
      const purchaseLines: Array<{
        stockItemId: string;
        quantity: Prisma.Decimal;
        unit: Unit;
        unitCost: Prisma.Decimal;
        totalCost: Prisma.Decimal;
      }> = [];

      for (const line of input.lines) {
        const stockItem = await tx.stockItem.findFirst({
          where: {
            id: line.stockItemId,
            tenantId: input.tenantId,
            deleted: false,
          },
        });

        if (!stockItem) {
          throw new Error('Stock item not found');
        }

        const quantityInItemUnit = this.convertUnits(
          stockItem.unit as Unit,
          line.unit,
          line.quantity,
        );

        const updated = await tx.stockItem.update({
          where: { id: stockItem.id },
          data: {
            currentQuantity: stockItem.currentQuantity.add(
              this.toDecimal(quantityInItemUnit),
            ),
            updatedAt: new Date(),
          },
        });

        updatedItems.push(this.mapStockItem(updated));

        const totalCost = quantityInItemUnit * line.unitCost;
        purchaseLines.push({
          stockItemId: line.stockItemId,
          quantity: this.toDecimal(quantityInItemUnit),
          unit: stockItem.unit as Unit,
          unitCost: this.toDecimal(line.unitCost),
          totalCost: this.toDecimal(totalCost),
        });
      }

      const totalCostNumber = purchaseLines.reduce(
        (sum, line) => sum + Number(line.totalCost),
        0,
      );

      const purchaseRecord = await tx.purchase.create({
        data: {
          tenantId: input.tenantId,
          supplierName: input.supplierName ?? null,
          reference: input.reference ?? null,
          totalCost: this.toDecimal(totalCostNumber),
          lines: {
            create: purchaseLines.map((line) => ({
              stockItemId: line.stockItemId,
              quantity: line.quantity,
              unit: line.unit,
              unitCost: line.unitCost,
              totalCost: line.totalCost,
            })),
          },
        },
        include: { lines: true },
      });

      return {
        purchase: this.mapPurchase(purchaseRecord),
        updatedItems,
      };
    });

    return result;
  }

  async listPurchases(tenantId: string): Promise<Purchase[]> {
    const records = await this.prisma.purchase.findMany({
      where: { tenantId },
      include: { lines: true },
      orderBy: { occurredAt: 'desc' },
    });

    return records.map((record) => this.mapPurchase(record));
  }

  async logWaste(
    input: WasteInput,
  ): Promise<{ waste: WasteEntry; updatedItem: StockItem }> {
    const result = await this.prisma.$transaction(async (tx) => {
      const stockItem = await tx.stockItem.findFirst({
        where: {
          id: input.stockItemId,
          tenantId: input.tenantId,
          deleted: false,
        },
      });

      if (!stockItem) {
        throw new Error('Stock item not found');
      }

      const quantityInItemUnit = this.convertUnits(
        stockItem.unit as Unit,
        input.unit,
        input.quantity,
      );

      const updated = await tx.stockItem.update({
        where: { id: stockItem.id },
        data: {
          currentQuantity: stockItem.currentQuantity.sub(
            this.toDecimal(quantityInItemUnit),
          ),
          updatedAt: new Date(),
        },
      });

      const waste = await tx.wasteLog.create({
        data: {
          tenantId: input.tenantId,
          stockItemId: input.stockItemId,
          quantity: this.toDecimal(quantityInItemUnit),
          unit: stockItem.unit as Unit,
          reason: input.reason,
        },
      });

      return {
        waste: this.mapWaste(waste),
        updatedItem: this.mapStockItem(updated),
      };
    });

    return result;
  }

  async listWaste(tenantId: string): Promise<WasteEntry[]> {
    const records = await this.prisma.wasteLog.findMany({
      where: { tenantId },
      orderBy: { occurredAt: 'desc' },
    });

    return records.map((record) => this.mapWaste(record));
  }

  private mapStockItem(record: {
    id: string;
    tenantId: string;
    name: string;
    unit: Unit;
    reorderLevel: Prisma.Decimal;
    categories: string[];
    currentQuantity: Prisma.Decimal;
    createdAt: Date;
    updatedAt: Date;
  }): StockItem {
    return {
      id: record.id,
      tenantId: record.tenantId,
      name: record.name,
      unit: record.unit,
      reorderLevel: Number(record.reorderLevel),
      categories: record.categories,
      currentQuantity: Number(record.currentQuantity),
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString(),
    };
  }

  private mapPurchase(record: {
    id: string;
    tenantId: string;
    supplierName: string | null;
    reference: string | null;
    occurredAt: Date;
    totalCost: Prisma.Decimal;
    lines: Array<{
      stockItemId: string;
      quantity: Prisma.Decimal;
      unit: Unit;
      unitCost: Prisma.Decimal;
      totalCost: Prisma.Decimal;
    }>;
  }): Purchase {
    return {
      id: record.id,
      tenantId: record.tenantId,
      supplierName: record.supplierName,
      reference: record.reference,
      occurredAt: record.occurredAt.toISOString(),
      totalCost: Number(record.totalCost),
      lines: record.lines.map((line) => ({
        stockItemId: line.stockItemId,
        quantity: Number(line.quantity),
        unit: line.unit,
        unitCost: Number(line.unitCost),
        totalCost: Number(line.totalCost),
      })),
    };
  }

  private mapWaste(record: {
    id: string;
    tenantId: string;
    stockItemId: string;
    quantity: Prisma.Decimal;
    unit: Unit;
    reason: string;
    occurredAt: Date;
  }): WasteEntry {
    return {
      id: record.id,
      tenantId: record.tenantId,
      stockItemId: record.stockItemId,
      quantity: Number(record.quantity),
      unit: record.unit,
      reason: record.reason,
      occurredAt: record.occurredAt.toISOString(),
    };
  }

  private convertUnits(targetUnit: Unit, fromUnit: Unit, quantity: number): number {
    if (targetUnit === fromUnit) {
      return quantity;
    }
    if (!canConvert(fromUnit, targetUnit)) {
      throw new Error(
        `Cannot convert from ${fromUnit} to ${targetUnit}; incompatible units`,
      );
    }
    return convertUnit(quantity, fromUnit, targetUnit);
  }

  private toDecimal(value: number): Prisma.Decimal {
    return new Prisma.Decimal(value);
  }

  private handlePrismaError(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new Error('Record already exists with the provided unique fields');
      }
      throw error;
    }

    throw error as Error;
  }
}
