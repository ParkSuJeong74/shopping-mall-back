import { IsDate, IsNumber, IsString } from 'class-validator';

export class SearchOrdersDto {
  @IsString()
  pay_state: string;

  @IsNumber()
  createdAt: string;

  @IsDate()
  updatedat: Date;

  @IsString()
  username: string;
}
