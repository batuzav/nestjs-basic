import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { Products } from 'src/entities/products.entity';

@Injectable()
export class ProductsService {
  private counterId = 1
  private products: Products[] = [
    {
      _id: 1,
      name: 'Product 1',
      description: 'bla bla',
      image: '',
      price: '12',
    }
  ]

  findAll() {
    return this.products
  }

  findOne(id: number) {
    const product = this.products.find((item) => item._id == id)
    if(!product)
      throw new NotFoundException(`No exitse el identificador ${id}`);


    return product
  }

  create(payload: CreateProductDto) {
    this.counterId++
    const newProduct: Products = {
      _id: this.counterId,
      ...payload,
    }
    this.products.push(newProduct)
    return newProduct
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if(!product)
      throw new NotFoundException(`No se encontro el producto con el id: ${id}`)

    const index = this.products.findIndex((item) => item._id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item._id === id);
    if(!index)
      throw new NotFoundException(`No se encontro el id: ${id}`);

    this.products.slice(index, 1)
  }

}
