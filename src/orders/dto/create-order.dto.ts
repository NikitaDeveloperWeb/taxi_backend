import { ObjectId } from 'mongoose';

export class CreateOrdersDto {
  readonly operator: ObjectId;
  readonly phone: string;
  readonly from: string;
  readonly to: string;
  readonly price: number;
  readonly date: string;
  readonly time: string;
  readonly fulfilled: string;
}
