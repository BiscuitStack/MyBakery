import { createHmac } from 'crypto';

export type UserId = string; // UUID v4

export interface AccessTokenPayload {
  sub: string;
  tenantId: string;
  roles: string[];
  iat: number;
  exp: number;
}

export interface CreateAccessTokenParams {
  subject: string;
  tenantId: string;
  roles: string[];
  secret: string;
  expiresInSeconds?: number;
}

const DEFAULT_EXPIRY = 60 * 60; // 1 hour

const BASE_HEADER = {
  alg: 'HS256',
  typ: 'JWT',
};

const encoder = new TextEncoder();

const base64Url = (source: string | Buffer): string =>
  Buffer.from(source).toString('base64url');

const stringifyAndEncode = (value: unknown): string =>
  base64Url(JSON.stringify(value));

export function createAccessToken(
  params: CreateAccessTokenParams,
): { token: string; payload: AccessTokenPayload } {
  const { subject, tenantId, roles, secret, expiresInSeconds = DEFAULT_EXPIRY } =
    params;

  const issuedAt = Math.floor(Date.now() / 1000);
  const payload: AccessTokenPayload = {
    sub: subject,
    tenantId,
    roles,
    iat: issuedAt,
    exp: issuedAt + expiresInSeconds,
  };

  const headerSegment = stringifyAndEncode(BASE_HEADER);
  const payloadSegment = stringifyAndEncode(payload);
  const signingInput = `${headerSegment}.${payloadSegment}`;
  const signature = createHmac('sha256', encoder.encode(secret))
    .update(signingInput)
    .digest('base64url');

  return {
    token: `${signingInput}.${signature}`,
    payload,
  };
}

export function verifyAccessToken(
  token: string,
  secret: string,
): AccessTokenPayload {
  const segments = token.split('.');
  if (segments.length !== 3) {
    throw new Error('Invalid token format');
  }

  const [headerSeg, payloadSeg, signatureSeg] = segments;
  const expectedSignature = createHmac('sha256', encoder.encode(secret))
    .update(`${headerSeg}.${payloadSeg}`)
    .digest('base64url');

  if (expectedSignature !== signatureSeg) {
    throw new Error('Invalid token signature');
  }

  const payload: AccessTokenPayload = JSON.parse(
    Buffer.from(payloadSeg, 'base64url').toString('utf-8'),
  );

  const now = Math.floor(Date.now() / 1000);
  if (payload.exp <= now) {
    throw new Error('Token expired');
  }

  return payload;
}

export const isAuthenticated = (token?: string): boolean => Boolean(token);
