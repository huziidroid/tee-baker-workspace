import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';

type JwtPayloadType = {
  sub: string;
  email: string;
};

@Injectable()
export class HashingService {
  constructor(private readonly jwtService: JwtService, private readonly config: ConfigService) {}

  async createAccessToken(userId: string, email: string) {
    const payload = { sub: userId, email };
    return this.jwtService.signAsync(payload);
  }

  async verifyAccessToken(token: string) {
    const payload = await this.jwtService.verifyAsync<JwtPayloadType>(token, {
      secret: this.config.get('SECRET_KEY'),
    });
    return payload;
  }

  async createPasswordHash(password: string) {
    const hashedPassword = await argon.hash(password);
    return hashedPassword;
  }

  async verifyHashedPassword(hashedPassword: string, password: string) {
    const isVerified = await argon.verify(hashedPassword, password);
    return isVerified;
  }
}
