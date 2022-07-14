import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtAdmOnlyStrategy, JwtStrategy } from 'src/auth/jwt.strategies';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({})],
  controllers: [OrderController],
  providers: [OrderService, JwtStrategy, JwtAdmOnlyStrategy],
})
export class OrderModule {}
