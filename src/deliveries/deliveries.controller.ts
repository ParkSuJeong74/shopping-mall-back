import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeliveriesService } from './deliveries.service';
import { StartDeliveryDto } from './dto';

@ApiTags('Deliveries API')
@Controller('deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @HttpCode(201)
  @Post()
  @ApiOperation({
    summary: '제품 발송 처리 API',
    description: '제품 발송을 배송중으로 처리한다.',
  })
  @ApiResponse({
    status: 201,
    description: '제품 발송 처리 성공',
  })
  @ApiBody({ type: StartDeliveryDto })
  async startDelivery(@Body() startDeliveryDto: StartDeliveryDto) {
    return await this.deliveriesService.startDelivery(startDeliveryDto);
  }

  // 배송 상태 업데이트
}
