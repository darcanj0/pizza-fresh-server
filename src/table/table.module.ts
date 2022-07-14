import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtAdmOnlyStrategy, JwtStrategy } from 'src/auth/jwt.strategies';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TableController } from './table.controller';
import { TableService } from './table.service';

@Module({
  imports: [PrismaModule, PassportModule.register({})],
  controllers: [TableController],
  providers: [TableService, JwtStrategy, JwtAdmOnlyStrategy],
})
export class TableModule {}
