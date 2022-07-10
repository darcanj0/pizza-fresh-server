import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { FavoriteProductDto } from './dto/favorite-product.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: 'Lists all users',
  })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'List a user by id',
  })
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Patch('favorite/:userId')
  @ApiOperation({
    summary: 'Favorite a product',
  })
  favorite(@Param('userId') id: string, @Body() dto: FavoriteProductDto): Promise<User> {
    return this.userService.favorite(id, dto);
  }

  @Patch('unfavorite/:userId')
  @ApiOperation({
    summary: 'Unfavorite a product',
  })
  unfavorite(@Param('userId') id: string, @Body() dto: FavoriteProductDto): Promise<User> {
    return this.userService.unfavorite(id, dto);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
  })
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Updates a user by id',
  })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletes a user by id',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
