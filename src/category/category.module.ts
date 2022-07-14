import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtAdmOnlyStrategy } from 'src/auth/jwt.strategies';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'admin' }),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, JwtAdmOnlyStrategy],
})
export class CategoryModule {}
