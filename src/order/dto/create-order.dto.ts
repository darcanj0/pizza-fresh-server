import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsPositive,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { OrderProductsDto } from './order-products.dto';

export class CreateOrderDto {
  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Number from the table that made the order',
    example: 1,
  })
  table_number: number;

  @IsBoolean()
  @ApiProperty({
    description: 'Boolean that represents the status of the order',
    example: true,
  })
  active: boolean;

  @ValidateNested({ each: true })
  @Type(() => OrderProductsDto)
  @ApiProperty({
    description:
      'List of objects with each product from the order, containing their ID and quantity.',
    type: [OrderProductsDto],
  })
  products: object[];
}
