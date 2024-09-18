import { ForbiddenException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { PrismaService } from '@modules/prisma/prisma.service';
import { LoginDTO } from './dtos/login.dto';
import { AUTH_ERROR_MESSAGES } from './constants';
import { SecurityService } from '@shared/modules/security.service';
import { RegisterDTO } from './dtos/register.dto';

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

  async register(body: RegisterDTO) {
    const { password, ...restPayload } = body;

    try {
      const passwordHash = await this.securityService.createPasswordHash(password);
      const userCreated = await this.prismaService.user.create({ data: { ...restPayload, password: passwordHash } });

      const accessToken = await this.securityService.createAccessToken(userCreated.id, userCreated.email);
      return { accessToken };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(AUTH_ERROR_MESSAGES.userAlreadyExists);
        }
      }
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }
}
