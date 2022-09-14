import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CouponsService } from './coupons.service';
import { MakeCouponDto, MakeCouponTypeDto } from './dto';

@ApiTags('Coupons API')
@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @HttpCode(201)
  @Post('type')
  @ApiOperation({
    summary: '쿠폰 종류 생성 API',
    description: '쿠폰 종류를 생성한다.',
  })
  @ApiResponse({
    status: 201,
    description: '쿠폰 종류 생성 성공',
  })
  @ApiBody({ type: MakeCouponTypeDto })
  async makeCouponsType(@Body() makeCouponTypeDto: MakeCouponTypeDto) {
    return await this.couponsService.makeCouponsType(makeCouponTypeDto);
  }

  @Post()
  async makeNewCoupons(@Body() makeCouponDto: MakeCouponDto) {
    return await this.couponsService.makeCoupons(makeCouponDto);
  }

  @Post('apply')
  async applyCoupons() {
    return await this.couponsService.applyCoupons(); // order에 쿠폰 적용
  }

  @Get()
  async showCoupons() {} // 사용 내역

  @Get('type')
  async showCouponsType() {} // 총 할인액
}
