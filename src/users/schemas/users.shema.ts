import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  firstname: string;

  @Prop({ type: String, required: true })
  lastname: string;

  @Prop({ type: String, required: true })
  date: string;

  @Prop({ type: String, required: false })
  car?: string;

  @Prop({ type: String, required: true, unique: true })
  username: string;

  @Prop({ type: String, required: true })
  inn: string;

  @Prop({ type: String, required: true })
  passport: string;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: false })
  drive?: string;

  @Prop({ type: String, required: true })
  position: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true })
  password2: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
