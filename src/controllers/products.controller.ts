import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
  HttpStatus,
  // ParseIntPipe,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dtos';
import { ProductService } from 'src/services/product.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
      products: this.productService.findAll(),
    };
  }

  @Get('filter')
  getFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getDetails(@Param('productId', ParseIntPipe) productId: number) {
    return {
      messages: `El producto con el id ${productId}`,
      products: this.productService.findOne(productId),
    };
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    this.productService.create(payload);

    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    const productUpdated = this.productService.updateOne(id, payload);

    return {
      message: 'accion de actualizar',
      id,
      payload: productUpdated,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id', ParseIntPipe) id: number) {
    // console.log(payload);
    // if (Object.keys(payload).length === 0) {
    //   return {};
    // }

    this.productService.deleteOne(id);
    return {
      id,
      message: 'accion de borrar',
    };
  }
}
