import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { PrismaService } from '@modules/prisma/prisma.service';
import { LoginDTO } from './dtos/login.dto';
import { AUTH_ERROR_MESSAGES } from './constants';
import { HashingService } from '@shared/services/HashingService';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private readonly hashingService: HashingService) {}
  async login(body: LoginDTO) {
    const { email, password } = body;

    const userFound = await this.prismaService.user.findUnique({ where: { email } });
    if (!userFound) throw new NotFoundException(AUTH_ERROR_MESSAGES.userNotFound);

    const passwordMatched = await this.hashingService.verifyHashedPassword(userFound.password, password);
    if (!passwordMatched) throw new UnauthorizedException(AUTH_ERROR_MESSAGES.unauthorizesAccess);

    const accessToken = await this.hashingService.createAccessToken(userFound.id, email);
    return accessToken;
  }
}
