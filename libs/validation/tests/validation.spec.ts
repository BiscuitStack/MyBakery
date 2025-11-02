import { Schema, validate } from '@bakewise/validation';

describe('validation schema helper', () => {
  const schema: Schema<{
    id: string;
    name: string;
    quantity: number;
    status: 'PENDING' | 'READY';
  }> = {
    id: { type: 'uuid' },
    name: { type: 'string', trim: true, min: 1 },
    quantity: { type: 'number', min: 0 },
    status: { type: 'string', enum: ['PENDING', 'READY'] },
  };

  it('succeeds with valid payload', () => {
    const result = validate(
      {
        id: '2d2b7390-ad5e-4ef3-b79a-8f8ac5cdc9b7',
        name: '  Chocolate Cake ',
        quantity: 4,
        status: 'READY',
      },
      schema,
    );

    expect(result).toEqual({
      success: true,
      data: {
        id: '2d2b7390-ad5e-4ef3-b79a-8f8ac5cdc9b7',
        name: 'Chocolate Cake',
        quantity: 4,
        status: 'READY',
      },
    });
  });

  it('returns issues for invalid payload', () => {
    const result = validate(
      {
        id: 'not-a-uuid',
        name: '',
        quantity: -1,
        status: 'DELIVERED',
      },
      schema,
    );

    expect(result.success).toBe(false);
    if (result.success) {
      return;
    }

    expect(result.issues.map((issue) => issue.code)).toEqual(
      expect.arrayContaining(['invalid_format', 'too_small', 'invalid_enum']),
    );
  });
});
