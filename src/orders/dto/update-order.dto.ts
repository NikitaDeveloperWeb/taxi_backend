export class UpdateOrdersDto {
  readonly phone: string;
  readonly from: string;
  readonly to: string;
  readonly price: number;
  readonly date: string;
  readonly time: string;
  readonly fulfilled: string;
  readonly child: boolean;
  readonly bagage: boolean;
}
