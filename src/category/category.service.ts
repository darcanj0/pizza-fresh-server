import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCategoryDto): Promise<Category> {
    const data = { ...dto };
    return this.prisma.category.create({ data }).catch(handleError);
  }

  findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async findById(id: number): Promise<Category> {
    const record = await this.prisma.category.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Id ${id} register was not found`);
    }
    return record;
  }

  findOne(id: number): Promise<Category> {
    return this.findById(id);
  }

  async update(id: number, dto: CreateCategoryDto): Promise<Category> {
    await this.findById(id);
    const data = { ...dto };
    return this.prisma.category
      .update({ where: { id }, data })
      .catch(handleError);
  }

  async remove(id: number) {
    await this.findById(id);
    return this.prisma.category.delete({ where: { id } });
  }
}
