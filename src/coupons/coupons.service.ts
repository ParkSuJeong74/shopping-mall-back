import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MakeCouponDto, MakeCouponTypeDto } from './dto';

@Injectable()
export class CouponsService {
  constructor(private readonly prisma: PrismaService) {}

  async makeCouponsType(makeCouponTypeDto: MakeCouponTypeDto) {
    const { coupon_type_name, type, price_type, discount_value } =
      makeCouponTypeDto;

    try {
      const couponType = await this.prisma.couponType.create({
        data: { coupon_type_name, type, price_type, discount_value },
      });

      return couponType;
    } catch (err) {
      throw new NotFoundException('쿠폰의 종류를 생성하지 못했습니다.');
    }
  }

  async makeCoupons(makeCouponDto: MakeCouponDto) {
    const { endAt, coupon_type_id } = makeCouponDto;
    const number = Math.floor(Math.random() * 1000000);
    const coupon_code: string = number.toString().padStart(6, '0');

    try {
      const coupon = await this.prisma.coupon.create({
        data: { coupon_code, endAt, coupon_type_id },
      });

      return coupon;
    } catch (err) {
      throw new NotFoundException('쿠폰을 생성하지 못했습니다.');
    }
  }

  async applyCoupons() {}
}
