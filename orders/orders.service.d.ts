import { Model } from 'mongoose';
import { CreateOrdersDto } from './dto/create-order.dto';
import { UpdateOrdersDto } from './dto/update-order.dto';
import { Order, OrderDocument } from './schemas/order.schema';
export declare class OrdersService {
    private OrderModel;
    constructor(OrderModel: Model<OrderDocument>);
    private readonly orders;
    getAll(): Promise<Order[]>;
    getOne(id: any): Promise<Order>;
    create(CreateOrdersDto: CreateOrdersDto): Promise<Order>;
    update(id: string, OrderDto: UpdateOrdersDto): Promise<Order>;
    remove(id: string): Promise<Order>;
}
