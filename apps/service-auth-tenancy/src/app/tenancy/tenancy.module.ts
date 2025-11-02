import { Module } from '@nestjs/common';

import { SecretsModule } from '../config/secrets.module';
import { DomainEventPublisher } from '../infrastructure/domain-event.publisher';
import { TenancyRepository } from '../persistence/tenancy.repository';
import { InMemoryTenancyRepository } from '../persistence/in-memory-tenancy.repository';
import { PrismaTenancyRepository } from '../persistence/prisma-tenancy.repository';
import { TenancyController } from './tenancy.controller';
import { TenancyService } from './tenancy.service';

const tenancyRepositoryProvider = {
  provide: TenancyRepository,
  useFactory: () => {
    if (
      process.env.AUTH_DATABASE_URL &&
      process.env.USE_IN_MEMORY_REPOSITORIES !== 'true' &&
      typeof process.env.JEST_WORKER_ID === 'undefined'
    ) {
      return new PrismaTenancyRepository();
    }
    return new InMemoryTenancyRepository();
  },
};

@Module({
  imports: [SecretsModule],
  controllers: [TenancyController],
  providers: [TenancyService, tenancyRepositoryProvider, DomainEventPublisher],
  exports: [TenancyRepository, TenancyService],
})
export class TenancyModule {}
