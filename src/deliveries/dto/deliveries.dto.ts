import { IsNumber } from 'class-validator';

export class StartDeliveryDto {
  @IsNumber()
  id: number;
}
