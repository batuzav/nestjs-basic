import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  find(
    @Query('limit') limit: number,
    @Query('skip') skip: number,
  ) {
    return `este es el get con el limit: ${limit}. skip: ${skip}`
  }

  @Get(':id')
  findById(
    @Param('id') id: string,
  ) {
    return `este esle id del get ${id}`
   }

   @Post()
   createOrder(
     @Body() body: Users
   ) {
     return `Este es el orden que se guardará: ${body}`
   }

   @Patch(':id')
   updateOrder(
     @Param('id') id: string,
     @Body() body: Users
   ) {
     return `Es el id que se actualizara ${id}  con este body ${body}`
   }

   @Delete(':id')
   deleteOrder(
     @Param('id') id: string
   ) {
     return `Este es ek usuario que se eliminara: ${id}`
   }
}
