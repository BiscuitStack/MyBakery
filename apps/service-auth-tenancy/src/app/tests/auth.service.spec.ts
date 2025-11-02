import { Test } from '@nestjs/testing';

import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { TenancyService } from '../tenancy/tenancy.service';
import {
  PROVISIONING_SECRET_TOKEN,
  JWT_SECRET_TOKEN,
} from '../app.tokens';

describe('AuthService', () => {
  const provisioningSecret = 'auth-service-secret';
  const jwtSecret = 'jwt-test-secret';

  let authService: AuthService;
  let tenancyService: TenancyService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AuthModule],
    })
      .overrideProvider(PROVISIONING_SECRET_TOKEN)
      .useValue(provisioningSecret)
      .overrideProvider(JWT_SECRET_TOKEN)
      .useValue(jwtSecret)
      .compile();

    authService = moduleRef.get(AuthService);
    tenancyService = moduleRef.get(TenancyService);
  });

  it('authenticates a user with correct credentials', async () => {
    const provisioningResult = await tenancyService.provisionTenant({
      secret: provisioningSecret,
      tenantName: 'QA Bakery',
      tenantSlug: 'qa-bakery',
      ownerName: 'Taylor Owner',
      ownerEmail: 'taylor@example.com',
    });

    const loginResult = await authService.login({
      tenantSlug: provisioningResult.tenantSlug,
      email: provisioningResult.ownerEmail,
      password: provisioningResult.ownerTemporaryPassword,
    });

    expect(loginResult.accessToken).toBeDefined();
    expect(loginResult.tokenType).toBe('Bearer');
    expect(loginResult.tenantId).toBe(provisioningResult.tenantId);
    expect(loginResult.userId).toBe(provisioningResult.ownerUserId);
  });

  it('rejects invalid credentials', async () => {
    await tenancyService.provisionTenant({
      secret: provisioningSecret,
      tenantName: 'QA Bakery',
      tenantSlug: 'qa-bakery-2',
      ownerName: 'Taylor Owner',
      ownerEmail: 'taylor+two@example.com',
    });

    await expect(
      authService.login({
        tenantSlug: 'qa-bakery-2',
        email: 'taylor+two@example.com',
        password: 'wrong-password',
      }),
    ).rejects.toThrow(/Invalid credentials/);
  });
});
