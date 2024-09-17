import { Module } from '@nestjs/common';

import { HashingService } from '@shared/services/HashingService';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, HashingService],
})
export class AuthModule {}
