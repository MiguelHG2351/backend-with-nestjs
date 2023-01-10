import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //   @Get(':id')
  //   getProducts(@Param() params: any) {
  //     return `yo soy nuevo ${params.id}`;
  //   }

  @Get(':id/details/:field')
  getProductsDetails(@Param('field') field: string, @Param('id') id: string) {
    return `El producto con el id ${id} tiene el campo ${field}`;
  }
}
