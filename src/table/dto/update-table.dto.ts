import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTableDto } from './create-table.dto';

export class UpdateTableDto extends PartialType(CreateTableDto) {
    @ApiProperty({
        description:'Represents the table number',
        example: 3,
    })
    number: number;
}
