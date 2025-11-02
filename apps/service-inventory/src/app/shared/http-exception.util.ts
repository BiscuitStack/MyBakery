import { HttpException, HttpStatus } from '@nestjs/common';
import {
  createErrorResponse,
  ErrorCode,
  isBakewiseError,
} from '@bakewise/common-errors';

export function toHttpException(error: unknown): HttpException {
  if (error instanceof HttpException) {
    return error;
  }

  if (isBakewiseError(error)) {
    return new HttpException(error.toResponse(), error.status);
  }

  return new HttpException(
    createErrorResponse({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: ErrorCode.INTERNAL_ERROR,
      message: 'Unexpected error',
    }),
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
}
