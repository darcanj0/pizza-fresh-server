import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class OrderProductsDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id from the product ordered',
    example: 'Insert here the product ID',
  })
  product_title: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantity of the product ordered',
    example: 2,
  })
  quantity: number;
}
