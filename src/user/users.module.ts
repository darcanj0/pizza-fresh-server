import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismaClient],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
