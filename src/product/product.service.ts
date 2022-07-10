import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  private productSelect = {
    id: true,
    title: true,
    price: true,
    description: true,
    image: true,
    category_title: true,
    created_at: true,
    updated_at: true,
  };

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({ select: this.productSelect });
  }

  async findById(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({
      where: { id },
      select: this.productSelect,
    });
    if (!record) {
      throw new NotFoundException(`Id ${id} register was not found.`);
    }
    return record;
  }

  findOne(id: string): Promise<Product> {
    return this.findById(id);
  }

  create(dto: CreateProductDto): Promise<Product> {
    const data = { ...dto };
    return this.prisma.product
      .create({ data, select: this.productSelect })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    await this.findById(id);
    const data = { ...dto };
    return this.prisma.product
      .update({ where: { id }, data, select: this.productSelect })
      .catch(handleError);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.prisma.product.delete({ where: { id } });
  }
}
