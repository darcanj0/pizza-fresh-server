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
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrderService } from './order.service';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new order',
  })
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @UseGuards(AuthGuard('admin'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'List all orders',
  })
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get('active')
  @UseGuards(AuthGuard('admin'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'List all active orders',
  })
  findAllActive(): Promise<Order[]> {
    return this.orderService.findAllActives();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Read an order by id',
  })
  findOne(@Param('id') id: number): Promise<Order> {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Deactivate an active order'
  })
  deactivateOne(@Param('id') id:number) {
    return this.orderService.deactivateOne(+id)
  }

  @Delete(':id')
  @UseGuards(AuthGuard('admin'))
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete an order record by id',
  })
  remove(@Param('id') id: number) {
    return this.orderService.remove(+id);
  }
}
