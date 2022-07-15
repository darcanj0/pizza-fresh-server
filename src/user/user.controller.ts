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
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/logged-user.decorator.dto';
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
  @UseGuards(AuthGuard('admin'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Lists all users',
  })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'List a user by id',
  })
  findOne(@Param('id') id: string, @LoggedUser() user: User): Promise<User> {
    if (user.id != id && !user.is_admin) {
      throw new UnauthorizedException('User does not exist or is unauthorized');
    }
    return this.userService.findOne(id);
  }

  @Patch('favorite/:userId')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Favorite a product',
  })
  favorite(@Param('userId') id: string, @Body() dto: FavoriteProductDto): Promise<User> {
    return this.userService.favorite(id, dto);
  }

  @Patch('unfavorite/:userId')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
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
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Updates a user by id',
  })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto, @LoggedUser() user: User): Promise<User> {
    if (user.id != id) {
      throw new UnauthorizedException('User does not exist or is unauthorized');
    }
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletes a user by id',
  })
  remove(@Param('id') id: string, @LoggedUser() user: User) {
    if (user.id != id && !user.is_admin) {
      throw new UnauthorizedException('User does not exist or is unauthorized');
    }
    return this.userService.remove(id);
  }
}
