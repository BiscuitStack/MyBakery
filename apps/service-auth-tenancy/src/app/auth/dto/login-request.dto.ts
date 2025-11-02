export interface LoginRequest extends Record<string, unknown> {
  tenantSlug: string;
  email: string;
  password: string;
}

export interface LoginResult {
  accessToken: string;
  tokenType: 'Bearer';
  expiresIn: number;
  tenantId: string;
  userId: string;
  roles: string[];
}
