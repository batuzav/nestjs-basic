import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Customers } from 'src/entities/custumers.entity';

@Controller('customers')
export class CustomersController {
  constructor() { }

  @Get()
  getCustomres(
    @Query('limit') limit: number = 10,
    @Query('skip') skip: number = 1
  ) {
    return `este es el get con el limit: ${limit}. skip: ${skip}`
  }

  @Get(':id')
  getById(
    @Param('id') id: string
   ) {
     return ` este el id que se retornará ${id}`
   }

  @Post()
  createCustumers(
    @Body() body: Customers
  ) {
    return `Este es el creador de customer ${JSON.stringify(body)}`
  }

  @Patch(':id')
  updateCustomers(
    @Param('id') id: string,
    @Body() body: Customers
  ) {
    return `se va actualizael el id: ${id} con el body: ${JSON.stringify(body)}`
  }




}
