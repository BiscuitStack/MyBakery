import { Test } from '@nestjs/testing';

import {
  assertRoutingKey,
  buildRoutingKey,
  MessagingModule,
  parseRoutingKey,
} from '../src';

describe('MessagingModule', () => {
  it('registers without providers for baseline wiring', async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [MessagingModule],
    }).compile();

    expect(moduleRef).toBeDefined();
  });

  it('builds and parses routing keys', () => {
    const key = buildRoutingKey({
      context: 'inventory',
      entity: 'stock-item',
      event: 'created',
      version: 1,
    });

    expect(key).toBe('bakewise.inventory.stock-item.created.v1');
    expect(parseRoutingKey(key)).toEqual({
      context: 'inventory',
      entity: 'stock-item',
      event: 'created',
      version: 1,
    });
    expect(assertRoutingKey(key).context).toBe('inventory');
  });

  it('guards invalid routing keys', () => {
    expect(() =>
      buildRoutingKey({
        context: 'Inventory',
        entity: 'stock',
        event: 'created',
        version: 1,
      }),
    ).toThrow();
    expect(parseRoutingKey('invalid-key')).toBeNull();
    expect(() => assertRoutingKey('invalid-key')).toThrow();
  });
});
