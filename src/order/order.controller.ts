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
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrderService } from './order.service';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new order',
  })
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({
    summary: 'List all orders',
  })
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get('active')
  @ApiOperation({
    summary: 'List all active orders',
  })
  findAllActive(): Promise<Order[]> {
    return this.orderService.findAllActives();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Read an order by id',
  })
  findOne(@Param('id') id: number): Promise<Order> {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Deactivate an active order'
  })
  deactivateOne(@Param('id') id:number) {
    return this.orderService.deactivateOne(+id)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete an order record by id',
  })
  remove(@Param('id') id: number) {
    return this.orderService.remove(+id);
  }
}
