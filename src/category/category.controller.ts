import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() dto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Creates a new category'
  })
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Finds a category by id'
  })
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Updates a category by id'
  })
  update(@Param('id') id: string, @Body() dto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.update(+id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletes a category by id'
  })
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
