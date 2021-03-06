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
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { TableService } from './table.service';

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'List all tables',
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'List one table by its id',
  })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.tableService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard('admin'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create one table',
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('admin'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update one table by its id',
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
    return this.tableService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('admin'))
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete one table by its id',
  })
  delete(@Param('id') id: string) {
    return this.tableService.delete(id);
  }
}
