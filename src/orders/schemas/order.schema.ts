import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/users/schemas/users.shema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  operator: User;

  @Prop({ type: String, required: false })
  phone: string;

  @Prop({ type: String, required: false })
  from: string;

  @Prop({ type: String, required: false })
  to: string;

  @Prop({ type: String, required: false })
  price: number;

  @Prop({ type: String, required: false })
  date: string;

  @Prop({ type: String, required: false })
  time: string;

  @Prop({ type: String, required: false })
  child: boolean;

  @Prop({ type: String, required: false })
  bagage: boolean;

  @Prop({ type: String, required: false, default: '' })
  fulfilled: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
