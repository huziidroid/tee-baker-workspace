import { Body, Controller, Post } from '@nestjs/common';

import { Public } from '@shared/decorators';

import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDTO) {
    const accessToken = await this.authService.login(body);
    return { accessToken };
  }

  @Post('register')
  register(@Body() body: RegisterDTO) {
    return this.authService.register(body);
  }
}
