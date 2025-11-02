import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '@bakewise/service-auth-tenancy/app/app.module';

describe('Auth Tenancy API', () => {
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

  it('provisions a tenant and logs in the owner', async () => {
    const provisionResponse = await request(app.getHttpServer())
      .post('/api/tenants/provision')
      .send({
        secret: 'dev-provisioning-secret',
        tenantName: 'E2E Bakery',
        tenantSlug: 'e2e-bakery',
        ownerName: 'E2E Owner',
        ownerEmail: 'owner+e2e@example.com',
      })
      .expect(201);

    const {
      tenantId,
      ownerUserId,
      ownerTemporaryPassword,
      ownerEmail,
    } = provisionResponse.body.data;

    const loginResponse = await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({
        tenantSlug: 'e2e-bakery',
        email: ownerEmail,
        password: ownerTemporaryPassword,
      })
      .expect(200);

    expect(loginResponse.body.data.accessToken).toBeTruthy();
    expect(loginResponse.body.data.tenantId).toBe(tenantId);
    expect(loginResponse.body.data.userId).toBe(ownerUserId);
  });
});
