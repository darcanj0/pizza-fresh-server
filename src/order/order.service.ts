import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderProducts } from './entities/order-products.entity';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  private orderSelect = {
    id: true,
    table_number: true,
    active: true,
    user: { select: { id: true, user_name: true } },
    products: {
      select: { product_title: true, quantity: true, observation: true },
    },
    created_at: true,
  };

  create(dto: CreateOrderDto, id: string): Promise<Order> {
    const data: Prisma.orderCreateInput = {
      active: dto.active,
      table: { connect: { number: dto.table_number } },
      user: { connect: { id } },
      products: {
        createMany: {
          data: dto.products.map((product: OrderProducts) => ({
            product_title: product.product_title,
            quantity: product.quantity,
            observation: product.observation,
          })),
        },
      },
    };
    return this.prisma.order
      .create({ data, select: this.orderSelect })
      .catch(handleError);
  }

  findAll(): Promise<Order[]> {
    return this.prisma.order.findMany({
      select: {
        ...this.orderSelect,
        _count: { select: { products: true } },
        products: false,
      },
    });
  }

  findAllActives(): Promise<Order[]> {
    return this.prisma.order.findMany({
      where: { active: true },
      select: this.orderSelect,
    });
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

  async deactivateOne(id: number) {
    await this.findById(id);
    return this.prisma.order.update({ where: { id }, data: { active: false } });
  }

  async remove(id: number) {
    await this.findById(id);
    return this.prisma.order.delete({ where: { id } });
  }
}
