import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}
  private tableSelect = {
    id: true,
    number: true,
    orders: {
      select: { id: true, user: { select: { id: true, user_name: true } } },
    },
    created_at: true,
    updated_at: true,
  };

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany({ select: this.tableSelect });
  }

  async verifyIdAndReturnTable(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({
      where: { id },
      select: this.tableSelect,
    });

    if (!record) {
      throw new NotFoundException(`Id '${id}' register was not found.`);
    }

    return record;
  }

  findOne(id: string): Promise<Table> {
    return this.verifyIdAndReturnTable(id);
  }

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };
    return this.prisma.table
      .create({ data, select: this.tableSelect })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    //check id with query
    await this.verifyIdAndReturnTable(id);

    const data: UpdateTableDto = { ...dto };
    return this.prisma.table
      .update({
        where: { id },
        data,
        select: this.tableSelect,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.verifyIdAndReturnTable(id);
    await this.prisma.table.delete({
      where: { id },
    });
  }
}
