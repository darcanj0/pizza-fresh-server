import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'name of the product',
    example: 'Pepperoni pizza',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'product description (can be a summary or the ingredients)',
    example: 'cheese, pepperoni, oregano, pepper',
  })
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  @ApiProperty({
    description: 'product price',
    example: 21.99,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'product illustration',
    example:
      'https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg',
  })
  image: string;

  @IsString()
  @ApiProperty({
    description: 'Title of the category from which the product belongs to',
    example: 'Sweet pizzas',
  })
  category_title: string;
}
