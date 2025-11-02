import {
  createAccessToken,
  isAuthenticated,
  verifyAccessToken,
} from '../src';

describe('auth utilities', () => {
  it('treats missing token as unauthenticated', () => {
    expect(isAuthenticated()).toBe(false);
  });

  it('treats defined token as authenticated', () => {
    expect(isAuthenticated('token')).toBe(true);
  });

  it('creates and verifies a signed access token', () => {
    const { token, payload } = createAccessToken({
      subject: 'user-123',
      tenantId: 'tenant-123',
      roles: ['owner'],
      secret: 'super-secret',
      expiresInSeconds: 60,
    });

    expect(token.split('.')).toHaveLength(3);
    const verified = verifyAccessToken(token, 'super-secret');
    expect(verified.sub).toBe(payload.sub);
    expect(verified.tenantId).toBe(payload.tenantId);
    expect(verified.roles).toEqual(['owner']);
  });

  it('rejects tokens with invalid signature', () => {
    const { token } = createAccessToken({
      subject: 'user-123',
      tenantId: 'tenant-123',
      roles: ['owner'],
      secret: 'super-secret',
    });

    expect(() => verifyAccessToken(token, 'wrong-secret')).toThrow(
      /signature/,
    );
  });
});
