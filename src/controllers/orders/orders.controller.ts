import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Orders } from 'src/entities/orders.entoty';

@Controller('orders')
export class OrdersController {
  constructor() { }

  @Get()
  getOrders(
    @Query('limit') limit: number,
    @Query('skip') skip: number,
  ) {
    return `este es el get con el limit: ${limit}. skip: ${skip}`
  }

  @Get(':id')
  getOrdertById(
    @Param('id') id: string
  ) {
    return `Este el id que retornara ${id}`
   }

  @Post()
  createOrder(
    @Body() body: Orders
  ) {
    return `Este es el orden que se guardará: ${body}`
  }

  @Patch(':id')
  updateOrder(
    @Param('id') id: string,
    @Body() body: Orders
  ) {
    return `Es el id que se actualizara ${id}  con este body ${body}`
  }

  @Delete(':id')
  deleteOrder(
    @Param('id') id: string
  ) {
    return `Este es la orden que se eliminara: ${id}`
  }

}
