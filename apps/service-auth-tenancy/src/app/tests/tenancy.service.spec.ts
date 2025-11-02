import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';

import { TenancyModule } from '../tenancy/tenancy.module';
import { TenancyService } from '../tenancy/tenancy.service';
import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import { PROVISIONING_SECRET_TOKEN } from '../app.tokens';
import { authEnvSchema } from '../config/environment';

describe('TenancyService', () => {
  const provisioningSecret = 'unit-provisioning-secret';
  let publishSpy: jest.Mock;
  let service: TenancyService;

  beforeEach(async () => {
    publishSpy = jest.fn().mockResolvedValue(undefined);

    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          cache: true,
          validate: (env) => authEnvSchema.parse(env),
        }),
        TenancyModule,
      ],
    })
      .overrideProvider(PROVISIONING_SECRET_TOKEN)
      .useValue(provisioningSecret)
      .overrideProvider(DomainEventPublisher)
      .useValue({ publish: publishSpy })
      .compile();

    service = moduleRef.get(TenancyService);
  });

  it('provisions a tenant and emits an event', async () => {
    const result = await service.provisionTenant({
      secret: provisioningSecret,
      tenantName: 'BakeWise QA Bakery',
      tenantSlug: 'qa-bakery',
      ownerName: 'Sam Baker',
      ownerEmail: 'sam@example.com',
    });

    expect(result.tenantId).toBeDefined();
    expect(result.ownerTemporaryPassword.length).toBeGreaterThanOrEqual(12);
    expect(publishSpy).toHaveBeenCalledWith(
      {
        context: 'auth',
        entity: 'tenant',
        event: 'provisioned',
        version: 1,
      },
      expect.objectContaining({
        tenantId: result.tenantId,
        ownerUserId: result.ownerUserId,
      }),
    );
  });

  it('rejects invalid provisioning secret', async () => {
    await expect(
      service.provisionTenant({
        secret: 'wrong-secret',
        tenantName: 'Another Bakery',
        tenantSlug: 'another',
        ownerName: 'Alex Doe',
        ownerEmail: 'alex@example.com',
      }),
    ).rejects.toThrow(/Provisioning secret is invalid/);
  });
});
