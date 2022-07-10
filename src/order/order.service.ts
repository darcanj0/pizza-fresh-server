import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  private orderSelect = {
    id: true,
    user_id: true,
    table_number: true,
    active: true,
    products: { select: { product_title: true, quantity: true } },
    created_at: true,
  };

  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll(): Promise<Order[]> {
    return this.prisma.order.findMany({ select: this.orderSelect });
  }

  async findById(id: number): Promise<Order> {
    const record = await this.prisma.order.findUnique({
      where: { id },
      select: this.orderSelect,
    });
    if (!record) {
      throw new NotFoundException(`Id '${id}' register was not found.`);
    }
    return record;
  }

  findOne(id: number): Promise<Order> {
    return this.findById(id);
  }

  async remove(id: number) {
    await this.findById(id);
    return this.prisma.order.delete({ where: { id } });
  }
}
