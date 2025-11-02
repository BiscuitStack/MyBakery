import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '@bakewise/service-inventory/app/app.module';

const TENANT_HEADER = { 'x-tenant-id': 'tenant-e2e' };

describe('Service Inventory API', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  it('creates stock, records purchases, logs waste, and reports alerts', async () => {
    const stockResponse = await request(app.getHttpServer())
      .post('/api/stock-items')
      .set(TENANT_HEADER)
      .send({
        name: 'Chocolate Chips',
        unit: 'kg',
        reorderLevel: 5,
        categories: ['baking'],
        openingQuantity: 2,
      })
      .expect(201);

    const stockItemId = stockResponse.body.data.id;

    await request(app.getHttpServer())
      .post('/api/purchases')
      .set(TENANT_HEADER)
      .send({
        supplierName: 'Sweet Supplies',
        lines: [
          {
            stockItemId,
            quantity: 4,
            unit: 'kg',
            unitCost: 120,
          },
        ],
      })
      .expect(201);

    const alertsResponse = await request(app.getHttpServer())
      .get('/api/alerts/low-stock')
      .set(TENANT_HEADER)
      .expect(200);

    expect(alertsResponse.body.data).toHaveLength(0);

    await request(app.getHttpServer())
      .post('/api/waste')
      .set(TENANT_HEADER)
      .send({
        stockItemId,
        quantity: 6,
        unit: 'kg',
        reason: 'Spoiled',
      })
      .expect(201);

    const lowStockAfterWaste = await request(app.getHttpServer())
      .get('/api/alerts/low-stock')
      .set(TENANT_HEADER)
      .expect(200);

    expect(lowStockAfterWaste.body.data).toHaveLength(1);
    expect(lowStockAfterWaste.body.data[0].stockItemId).toBe(stockItemId);
  });
});
