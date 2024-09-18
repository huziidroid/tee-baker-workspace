import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { PrismaService } from '@modules/prisma/prisma.service';
import { LoginDTO } from './dtos/login.dto';
import { AUTH_ERROR_MESSAGES } from './constants';
import { SecurityService } from '@shared/modules/security.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private readonly securityService: SecurityService) {}
  async login(body: LoginDTO) {
    const { email, password } = body;

    const userFound = await this.prismaService.user.findUnique({ where: { email } });
    if (!userFound) throw new NotFoundException(AUTH_ERROR_MESSAGES.userNotFound);

    const passwordMatched = await this.securityService.verifyHashedPassword(userFound.password, password);
    if (!passwordMatched) throw new UnauthorizedException(AUTH_ERROR_MESSAGES.unauthorizesAccess);

    const accessToken = await this.securityService.createAccessToken(userFound.id, email);
    return accessToken;
  }
}
