import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateUserDto } from './dto/create-user.dto';
import { FavoriteProductDto } from './dto/favorite-product.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  private userSelect = {
    id: true,
    email: true,
    user_name: true,
    password: false,
    image: true,
    orders: { select: { id: true, active: true } },
    favorite_products: { select: { id: true, title: true } },
    created_at: true,
    updated_at: true,
  };

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ select: this.userSelect });
  }

  async verifyIdAndReturnUser(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });
    if (!record) {
      throw new NotFoundException(`Id ${id} register was not found.`);
    }
    return record;
  }

  findOne(id: string): Promise<User> {
    return this.verifyIdAndReturnUser(id);
  }

  async favorite(id: string, dto: FavoriteProductDto): Promise<User> {
    await this.verifyIdAndReturnUser(id);
    const data: Prisma.userUpdateInput = {
      favorite_products: { connect: { id: dto.id } },
    };
    return this.prisma.user
      .update({
        where: { id },
        data,
        select: this.userSelect,
      })
      .catch(handleError);
  }

  async unfavorite(id: string, dto: FavoriteProductDto): Promise<User> {
    await this.verifyIdAndReturnUser(id);
    const data: Prisma.userUpdateInput = {
      favorite_products: { disconnect: { id: dto.id } },
    };
    return this.prisma.user
      .update({
        where: { id },
        data,
        select: this.userSelect,
      })
      .catch(handleError);
  }

  async create(dto: CreateUserDto): Promise<User> {
    if (dto.password != dto.confirm_password) {
      throw new BadRequestException('Passwords sent are not equal.');
    }
    delete dto.confirm_password;
    const data: User = { ...dto, password: await bcrypt.hash(dto.password, 8) };
    return this.prisma.user
      .create({ data, select: this.userSelect })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.verifyIdAndReturnUser(id);

    if (dto.password) {
      if (dto.password != dto.confirm_password) {
        throw new BadRequestException('Passwords sent are not equal.');
      }
    }

    delete dto.confirm_password;

    if (dto.password) {
      dto = { ...dto, password: await bcrypt.hash(dto.password, 8) };
    }

    const data: Partial<User> = { ...dto };
    return this.prisma.user
      .update({
        where: { id },
        data,
        select: this.userSelect,
      })
      .catch(handleError);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnUser(id);
    await this.prisma.user.delete({ where: { id } });
  }
}
