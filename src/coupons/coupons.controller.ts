import { Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CouponsService } from './coupons.service';

@ApiTags('Coupons API')
@Controller('coupons')
export class CouponsController {
  private readonly logger = new Logger(`CouponsController`);
  constructor(private readonly couponsService: CouponsService) {}

  @Post()
  async makeCouponsType() {}

  @Post()
  async makeNewCoupons() {}

  @Get()
  async showCoupons() {} // 사용 내역

  @Get()
  async showCouponsType() {}
}
