import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getAuthPrismaClient } from '@bakewise/database';

import { SecretsModule } from '../config/secrets.module';
import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import { TenancyRepository } from '../persistence/tenancy.repository';
import { InMemoryTenancyRepository } from '../persistence/in-memory-tenancy.repository';
import { PrismaTenancyRepository } from '../persistence/prisma-tenancy.repository';
import { TenancyController } from './tenancy.controller';
import { TenancyService } from './tenancy.service';
import { AuthEnvironmentVariables } from '../config/environment';

const tenancyRepositoryProvider = {
  provide: TenancyRepository,
  useFactory: (configService: ConfigService<AuthEnvironmentVariables>) => {
    const databaseUrl = configService.get<string>('AUTH_DATABASE_URL');
    const useInMemory = configService.get<boolean>(
      'USE_IN_MEMORY_REPOSITORIES',
      { infer: true },
    );
    const jestWorkerId = configService.get<string>('JEST_WORKER_ID');

    if (
      databaseUrl &&
      !useInMemory &&
      typeof jestWorkerId === 'undefined'
    ) {
      return new PrismaTenancyRepository(getAuthPrismaClient(databaseUrl));
    }
    return new InMemoryTenancyRepository();
  },
  inject: [ConfigService],
};

@Module({
  imports: [SecretsModule],
  controllers: [TenancyController],
  providers: [TenancyService, tenancyRepositoryProvider, DomainEventPublisher],
  exports: [TenancyRepository, TenancyService],
})
export class TenancyModule {}
