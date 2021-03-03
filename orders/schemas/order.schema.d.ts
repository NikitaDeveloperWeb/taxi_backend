import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/users/schemas/users.shema';
export declare type OrderDocument = Order & Document;
export declare class Order {
    operator: User;
    phone: string;
    from: string;
    to: string;
    price: number;
    date: string;
    time: string;
    child: boolean;
    bagage: boolean;
    fulfilled: string;
}
export declare const OrderSchema: mongoose.Schema<Document<Order>, mongoose.Model<Document<Order>>, undefined>;
