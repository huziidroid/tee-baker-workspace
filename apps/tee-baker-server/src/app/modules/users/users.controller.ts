import { Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/')
  async getAllUsers() {
    const users = await this.userService.findAllUsers();
    return { users };
  }
}
