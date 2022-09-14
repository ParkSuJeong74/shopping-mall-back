import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CouponsService } from './coupons.service';
import { MakeCouponTypeDto } from './dto';

@ApiTags('Coupons API')
@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Post('type')
  async makeCouponsType(@Body() makeCouponTypeDto: MakeCouponTypeDto) {
    return await this.couponsService.makeCouponsType(makeCouponTypeDto);
  }

  @Post()
  async makeNewCoupons() {}

  @Get()
  async showCoupons() {} // 사용 내역

  @Get('type')
  async showCouponsType() {}
}
