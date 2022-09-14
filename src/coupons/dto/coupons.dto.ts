import { DiscountType, PriceType } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class MakeCouponTypeDto {
  @IsString()
  coupon_type_name: string;

  @IsString()
  type: DiscountType;

  @IsString()
  price_type: PriceType;

  @IsNumber()
  discount_value: number;
}

export class MakeCouponDto {
  @IsString()
  endAt: string;

  @IsNumber()
  coupon_type_id: number;
}
