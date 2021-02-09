import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrdersDto } from './dto/create-order.dto';
import { UpdateOrdersDto } from './dto/update-order.dto';
import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('Order') private OrderModel: Model<OrderDocument>) {}
  async getAll(): Promise<Order[]> {
    return await this.OrderModel.find().exec();
  }

  async getOne(id): Promise<Order> {
    return await this.OrderModel.findById(id);
  }

  async create(CreateOrdersDto: CreateOrdersDto): Promise<Order> {
    const newOrder = await new this.OrderModel(CreateOrdersDto);
    return newOrder.save();
  }

  async update(id: string, OrderDto: UpdateOrdersDto): Promise<Order> {
    return this.OrderModel.findByIdAndUpdate(id, OrderDto, { new: true });
  }

  async remove(id: string): Promise<Order> {
    return this.OrderModel.findByIdAndRemove(id);
  }
}
