import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('products/:id')
  getProducts(@Param() params: any) {
    return `yo soy nuevo ${params.id}`;
  }

  @Get('products/:id/details/:field')
  getProductsDetails(@Param('field') field: string, @Param('id') id: string) {
    return `El producto con el id ${id} tiene el campo ${field}`;
  }

  @Get('categories')
  getCategories(@Query('limit') limit = 10) {
    return `La categoría tiene el limite de ${limit}`;
  }
}
