import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MakeCouponTypeDto } from './dto';

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
}
