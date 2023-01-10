import { Controller, Get, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories(@Query('limit') limit = 10) {
    return `La categoría tiene el limite de ${limit}`;
  }
}
