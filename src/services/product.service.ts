import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla :D',
      price: 122,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  create(data: Product) {
    const newProduct = {
      id: this.products.length + 1,
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateOne(id: number, payload) {
    const productId = this.products.findIndex((product) => product.id === id);

    this.products[productId] = {
      ...this.products[productId],
      ...payload,
    };

    return this.products[productId];
  }

  deleteOne(id: number) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    this.products.splice(productIndex, 1);

    return this.products;
  }
}
