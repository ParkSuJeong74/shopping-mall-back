import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { StartDeliveryDto } from './dto';

@Controller('deliveries')
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @HttpCode(201)
  @Post()
  async startDelivery(@Body() startDeliveryDto: StartDeliveryDto) {
    return await this.deliveriesService.startDelivery(startDeliveryDto);
  }

  // 배송 상태 업데이트
}
