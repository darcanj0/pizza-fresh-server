import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class FavoriteProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id of the product',
    example: 'Insert here the product ID',
  })
  id: string;
}
