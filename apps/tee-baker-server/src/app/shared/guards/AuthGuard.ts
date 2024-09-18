import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

import { IS_PUBLIC_KEY } from '../decorators';
import { AUTH_ERROR_MESSAGES } from '@modules/auth/constants';
import { SecurityService } from '@shared/modules/security.service';

@Injectable()
export class AuthGaurd implements CanActivate {
  constructor(private readonly securityService: SecurityService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // get isPublic flag from metadata
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [context.getHandler(), context.getClass()]);

    // if route is marked as public, do not apply gaurd to it
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException(AUTH_ERROR_MESSAGES.noAccessToken);
    }

    try {
      const payload = await this.securityService.verifyAccessToken(token);
      request['user'] = { userId: payload.sub, email: payload.email };

      return true;
    } catch (error) {
      throw new UnauthorizedException(AUTH_ERROR_MESSAGES.invalidAccessToken);
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
