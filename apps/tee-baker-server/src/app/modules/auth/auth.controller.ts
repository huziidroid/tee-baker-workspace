import { Body, Controller, Post } from '@nestjs/common';

import { Public } from 'app/shared/decorators';
import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: LoginDTO) {
    return this.authService.login(body);
  }
}
