import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/users/schemas/users.shema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  operator: User;

  @Prop()
  phone: string;

  @Prop()
  from: string;

  @Prop()
  to: string;

  @Prop()
  price?: number;

  @Prop()
  date: string;

  @Prop()
  time: string;

  @Prop()
  fulfilled: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
