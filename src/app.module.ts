import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableModule } from './table/table.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/users.module';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TableModule, ProductModule, UserModule, PrismaModule, OrderModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
