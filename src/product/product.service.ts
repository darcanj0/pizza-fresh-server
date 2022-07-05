import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleUniqueConstraintError } from 'src/utils/handle-error-contraint-unique.util';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findById(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({ where: { id } });
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
      .create({ data })
      .catch(handleUniqueConstraintError);
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    await this.findById(id);
    const data = { ...dto };
    return this.prisma.product
      .update({ where: { id }, data })
      .catch(handleUniqueConstraintError);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.prisma.product.delete({ where: { id } });
  }
}
