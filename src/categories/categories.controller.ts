import { Body, Controller, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService
  ) {}

  @Get()
  getCategories() {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('uuid')id: number) {
    return this.categoriesService.getCategory(id);
  }

  @Post()
  createCategory(@Body('categoryName', ValidationPipe) categoryName: string) {
    return this.categoriesService.createCategory(categoryName);
  }

  @Patch('/:id')
  updateCategory(@Param('id') id: number, @Body('categoryName', ValidationPipe) categoryName: string) {
    return this.categoriesService.updateCategory(id, categoryName);
  }
}
