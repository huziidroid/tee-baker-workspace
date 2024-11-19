import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

import { Public, ResponseMessage } from '@shared/decorators';

import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('verify-session')
  @ResponseMessage('Session is verified')
  async verifySession(@Req() req: Request) {
    const userId = req?.user?.userId;
    const userMeta = await this.authService.verifySession(userId);
    return { userMeta };
  }

  @Public()
  @Post('login')
  @ResponseMessage('Logged In Successfully!')
  async login(@Body() body: LoginDTO) {
    const accessToken = await this.authService.login(body);
    return { accessToken };
  }

  @Public()
  @Post('register')
  @ResponseMessage('Registered Successfully!')
  async register(@Body() body: RegisterDTO) {
    const accessToken = await this.authService.register(body);
    return { accessToken };
  }
}
