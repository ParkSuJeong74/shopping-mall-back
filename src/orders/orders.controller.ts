import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';

@ApiTags('Orders API')
@Controller('orders')
export class OrdersController {
  private readonly logger = new Logger(`OrdersController`);
  constructor(private readonly ordersService: OrdersService) {}

  // 주문 상태, 시작일자, 종료일자, 주문자명
  @Get('search')
  async searchOrders() {}

  @Get()
  async getOrders() {}
}
