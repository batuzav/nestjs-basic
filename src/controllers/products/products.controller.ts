import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { Products } from 'src/entities/products.entity';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService
  )
  {}

  @Get(':id')
  getById(
    @Param('id', ParseIntPipe) productId: string,
    ) {

    return this.productsService.findOne(+productId)
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('skip') skip = 1,
    @Query('brand') brand = ""
    ) {
      return this.productsService.findAll()
  }

  @Post()
  createProduct(
    @Body() body: Products
  ) {
    return this.productsService.create(body)
  }

  @Patch(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Products,
  ) {
    return this.productsService.update(id, body)
  }

  @Delete(':id')
  deleteProduct(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.productsService.delete(id)
  }



}
