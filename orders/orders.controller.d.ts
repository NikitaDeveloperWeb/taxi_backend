import { CreateOrdersDto } from 'src/orders/dto/create-order.dto';
import { UpdateOrdersDto } from 'src/orders/dto/update-order.dto';
import { Order } from 'src/orders/schemas/order.schema';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly OrdersService;
    constructor(OrdersService: OrdersService);
    getAll(): Promise<Order[]>;
    getOne(id: string): Promise<Order>;
    create(createorderDto: CreateOrdersDto): Promise<Order>;
    update(updateorderDto: UpdateOrdersDto, id: string): Promise<Order>;
    remove(id: string): Promise<Order>;
}
