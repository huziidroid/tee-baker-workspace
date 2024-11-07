import { Body, Controller, Post } from '@nestjs/common';

import { Public, ResponseMessage } from '@shared/decorators';

import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ResponseMessage('Logged In Successfully')
  async login(@Body() body: LoginDTO) {
    const accessToken = await this.authService.login(body);
    return { accessToken };
  }

  @Post('register')
  @ResponseMessage('Registered Successfully')
  async register(@Body() body: RegisterDTO) {
    const accessToken = await this.authService.register(body);
    return { accessToken };
  }
}
