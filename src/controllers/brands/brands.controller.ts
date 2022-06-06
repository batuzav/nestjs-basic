import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  constructor(){

  }

  @Get()
  getBrands(
    @Query('limit') limit: number = 10,
    @Query('skip') skip: number = 1
  ) {
    return `Este es el get de todas las brands: limit: ${limit}, skip: ${skip}`
  }

  @Get(':id')
  getBrandById(
    @Param('id') id: string
  ){
    return `Este es el id: ${id}`
  }

  @Post()
  createBrand(
    @Body() body: any
  ) {
    return `Este es el nuevo brand: ${JSON.stringify(body)}`
  }

  @Patch(':id')
  updateBrands(
    @Param('id') id: string,
    @Body() body: any
  ){
    return `Se actualizará el id: ${id}, con este body: ${JSON.stringify(body)}`
  }

  @Delete(':id')
  deleteBrand(
    @Param('id') id: string
  ){
    return `Se eliminará el siguiente objeto: ${id}`
  }

}
