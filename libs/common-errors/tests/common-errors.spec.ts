import {
  BakewiseError,
  createErrorResponse,
  ErrorCode,
  isBakewiseError,
} from '@bakewise/common-errors';

describe('Bakewise errors', () => {
  it('creates error responses with details', () => {
    const response = createErrorResponse({
      status: 400,
      code: ErrorCode.INVALID_INPUT,
      message: 'Invalid payload',
      details: { field: 'name' },
    });

    expect(response).toEqual({
      status: 400,
      code: ErrorCode.INVALID_INPUT,
      message: 'Invalid payload',
      details: { field: 'name' },
    });
  });

  it('wraps errors in BakewiseError class', () => {
    const error = new BakewiseError(
      404,
      ErrorCode.NOT_FOUND,
      'Recipe not found',
    );

    expect(isBakewiseError(error)).toBe(true);
    expect(error.toResponse()).toEqual({
      status: 404,
      code: ErrorCode.NOT_FOUND,
      message: 'Recipe not found',
    });
  });
});
