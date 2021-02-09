import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrdersDto } from 'src/orders/dto/create-order.dto';
import { UpdateOrdersDto } from 'src/orders/dto/update-order.dto';
import { Order } from 'src/orders/schemas/order.schema';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly OrdersService: OrdersService) {}
  // get all orders
  @Get()
  getAll(): Promise<Order[]> {
    return this.OrdersService.getAll();
  }
  // get one orders
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Order> {
    return this.OrdersService.getOne(id);
  }

  // create new order
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createorderDto: CreateOrdersDto): Promise<Order> {
    return this.OrdersService.create(createorderDto);
  }

  // edit order
  @Put(':id')
  update(
    @Body() updateorderDto: UpdateOrdersDto,
    @Param('id') id: string,
  ): Promise<Order> {
    return this.OrdersService.update(id, updateorderDto);
  }

  // delete  order
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Order> {
    return this.OrdersService.remove(id);
  }
}
