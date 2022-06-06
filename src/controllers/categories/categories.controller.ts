import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Categories } from 'src/entities/categories.entity';

@Controller('categories')
export class CategoriesController {
  constructor() { }

  @Get()
  async getCategories(
    @Query('limit') limit: number,
    @Query('skip') skip: number,
  ) {
    return ` este esel get: limit ${limit}, skip ${skip} `
  }

  @Get(':id')
  async getCategoryById(
    @Param('id') id: string
  ) {
    return `Este es el degt por el id; ${id}`
  }

  @Post()
  async createCategory(
    @Body() body: Categories
  ) {
    return ` este esel body: ${JSON.stringify(body)}`
  }

  @Patch(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() body: Categories
  ) {
    return `este el categotia que se va actualizar: ${id}, body: ${body}`
  }

  @Delete(':id')
  async deleteCategory(
    @Param('id') id: string
  ) {
    return `Este es la categoria que se eliminará: ${id}`
  }
}
