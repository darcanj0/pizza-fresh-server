import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtAdmOnlyStrategy, JwtStrategy } from 'src/auth/jwt.strategies';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule, PassportModule.register({})],
  controllers: [UserController],
  providers: [UserService, JwtStrategy, JwtAdmOnlyStrategy],
})
export class UserModule {}
