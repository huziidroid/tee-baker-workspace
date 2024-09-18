import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { APP_GUARD } from '@nestjs/core';

import { AuthModule } from '@modules/auth/auth.module';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { AuthGaurd } from '@shared/guards';
import { SecurityModule } from '@shared/modules';

@Module({
  providers: [{ provide: APP_GUARD, useClass: AuthGaurd }],
  imports: [PrismaModule, AuthModule, SecurityModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
