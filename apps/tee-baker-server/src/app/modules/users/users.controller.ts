import { Controller, Get, Req } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/')
  getAllUsers(@Req() req) {
    return { users: req.user };
  }
}
