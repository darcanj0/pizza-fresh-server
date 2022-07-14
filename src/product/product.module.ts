import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtAdmOnlyStrategy } from 'src/auth/jwt.strategies';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'admin' }),
  ],
  controllers: [ProductController],
  providers: [ProductService, JwtAdmOnlyStrategy],
})
export class ProductModule {}
