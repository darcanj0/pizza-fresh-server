import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateTableDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Represents the table number',
    example: 1,
  })
  number: number;
}
