import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { CustomersController } from './controllers/customers/customers.controller';

@Module({
  imports: [],
  controllers: [ ProductsController, CategoriesController, UsersController, BrandsController, OrdersController, CustomersController],
  providers: [ ProductsService],
})
export class AppModule {}
