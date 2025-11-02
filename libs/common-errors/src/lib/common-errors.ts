export enum ErrorCode {
  INVALID_INPUT = 'BW_COMMON_INVALID_INPUT',
  NOT_FOUND = 'BW_COMMON_NOT_FOUND',
  CONFLICT = 'BW_COMMON_CONFLICT',
  UNAUTHORIZED = 'BW_COMMON_UNAUTHORIZED',
  FORBIDDEN = 'BW_COMMON_FORBIDDEN',
  INTERNAL_ERROR = 'BW_COMMON_INTERNAL_ERROR',
}

export interface BakewiseErrorResponse<TDetails = unknown> {
  status: number;
  code: ErrorCode | string;
  message: string;
  details?: TDetails;
}

export class BakewiseError<TDetails = unknown> extends Error {
  readonly status: number;
  readonly code: ErrorCode | string;
  readonly details?: TDetails;

  constructor(
    status: number,
    code: ErrorCode | string,
    message: string,
    details?: TDetails,
  ) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }

  toResponse(): BakewiseErrorResponse<TDetails> {
    return createErrorResponse({
      status: this.status,
      code: this.code,
      message: this.message,
      details: this.details,
    });
  }
}

type ErrorResponseInput<TDetails> = {
  status: number;
  code: ErrorCode | string;
  message: string;
  details?: TDetails;
};

export function createErrorResponse<TDetails = unknown>(
  input: ErrorResponseInput<TDetails>,
): BakewiseErrorResponse<TDetails> {
  return {
    status: input.status,
    code: input.code,
    message: input.message,
    ...(input.details !== undefined ? { details: input.details } : {}),
  };
}

export function isBakewiseError(input: unknown): input is BakewiseError {
  return input instanceof BakewiseError;
}
