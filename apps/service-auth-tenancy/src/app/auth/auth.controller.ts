import { Body, Controller, HttpCode, HttpException, Post } from '@nestjs/common';
import { ApiResponse } from '@bakewise/contracts';

import { toHttpException } from '../shared/http-exception.util';
import { AuthService } from './auth.service';
import { LoginResult } from './dto/login-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async login(
    @Body() body: Record<string, unknown>,
  ): Promise<ApiResponse<LoginResult>> {
    try {
      const data = await this.authService.login(body);
      return {
        data,
        meta: {
          generatedAt: new Date().toISOString(),
        },
      };
    } catch (error) {
      throw this.normalizeError(error);
    }
  }

  private normalizeError(error: unknown): HttpException {
    return toHttpException(error);
  }
}
