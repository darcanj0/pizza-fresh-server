import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class OrderProductsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Title of the ordered product',
    example: 'Insert here the product title',
  })
  product_title: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantity of the product ordered',
    example: 2,
  })
  quantity: number;
  
  observation: string;
}
