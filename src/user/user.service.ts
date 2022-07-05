import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async verifyIdAndReturnUser(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Id ${id} register was not found.`);
    }
    return record;
  }

  findOne(id: string): Promise<User> {
    return this.verifyIdAndReturnUser(id);
  }

  create(dto: CreateUserDto): Promise<User> {
    const data = { ...dto };
    return this.prisma.user.create({ data });
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.verifyIdAndReturnUser(id);
    const data = { ...dto };
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.verifyIdAndReturnUser(id);
    await this.prisma.user.delete({ where: { id } });
  }
}
