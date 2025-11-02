import { Injectable, Logger } from '@nestjs/common';
import {
  buildRoutingKey,
  RoutingKeyParts,
} from '@bakewise/messaging';

@Injectable()
export class DomainEventPublisher {
  private readonly logger = new Logger(DomainEventPublisher.name);

  async publish<TPayload>(
    parts: RoutingKeyParts,
    payload: TPayload,
  ): Promise<void> {
    const routingKey = buildRoutingKey(parts);
    this.logger.debug(
      `Publishing domain event ${routingKey}`,
      JSON.stringify(payload),
    );
    // RabbitMQ integration will be added once infrastructure is ready.
  }
}
