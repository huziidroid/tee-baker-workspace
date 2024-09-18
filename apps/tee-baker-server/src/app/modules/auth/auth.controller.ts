import { Body, Controller, Post } from '@nestjs/common';

import { Public } from 'app/shared/decorators';
import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: LoginDTO) {
    return this.authService.login(body);
  }

  @Post('register')
  register(@Body() body: RegisterDTO) {
    return this.authService.register(body);
  }
}
