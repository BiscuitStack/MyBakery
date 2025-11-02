import { Inject, Injectable } from '@nestjs/common';
import { BakewiseError, ErrorCode } from '@bakewise/common-errors';
import { createAccessToken } from '@bakewise/auth';
import { Schema, validate } from '@bakewise/validation';

import { JWT_SECRET_TOKEN } from '../app.tokens';
import { TenancyRepository } from '../persistence/tenancy.repository';
import { LoginRequest, LoginResult } from './dto/login-request.dto';

const LOGIN_SCHEMA: Schema<LoginRequest> = {
  tenantSlug: {
    type: 'string',
    trim: true,
    pattern: /^[a-z0-9-]+$/,
    min: 3,
  },
  email: {
    type: 'string',
    trim: true,
    pattern:
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: { type: 'string', min: 3 },
} as const;

@Injectable()
export class AuthService {
  constructor(
    private readonly repository: TenancyRepository,
    @Inject(JWT_SECRET_TOKEN) private readonly jwtSecret: string,
  ) {}

  async login(request: Record<string, unknown>): Promise<LoginResult> {
    const validation = validate<LoginRequest>(request, LOGIN_SCHEMA);

    if (!validation.success) {
      throw new BakewiseError(
        400,
        ErrorCode.INVALID_INPUT,
        'Invalid login request',
        (validation as Extract<typeof validation, { success: false }>).issues,
      );
    }

    const data = validation.data;
    const slug = data.tenantSlug.toLowerCase();
    const tenant = await this.repository.findTenantBySlug(slug);

    if (!tenant) {
      throw new BakewiseError(
        404,
        ErrorCode.NOT_FOUND,
        'Tenant not found',
        { slug },
      );
    }

    const email = data.email.toLowerCase();
    const user = await this.repository.findUserByEmail(tenant.id, email);

    if (!user) {
      throw new BakewiseError(
        404,
        ErrorCode.NOT_FOUND,
        'User not found for tenant',
        { email },
      );
    }

    if (!(await this.repository.verifyPassword(user, data.password))) {
      throw new BakewiseError(
        401,
        ErrorCode.UNAUTHORIZED,
        'Invalid credentials',
      );
    }

    const { token, payload } = createAccessToken({
      subject: user.id,
      tenantId: tenant.id,
      roles: user.roles,
      secret: this.jwtSecret,
    });

    return {
      accessToken: token,
      tokenType: 'Bearer',
      expiresIn: payload.exp - payload.iat,
      tenantId: tenant.id,
      userId: user.id,
      roles: user.roles,
    };
  }
}
