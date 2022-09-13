import { Controller, Get, Logger, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Order } from '@prisma/client';
import { OrdersService } from './orders.service';

@ApiTags('Orders API')
@Controller('orders')
export class OrdersController {
  private readonly logger = new Logger(`OrdersController`);
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':id')
  async getOrders(@Param('id') id: number): Promise<Order> {
    return await this.ordersService.getOrders(id);
  }

  // 주문 상태, 시작일자, 종료일자, 주문자명
  @Get('search')
  async searchOrders() {
    return await this.ordersService.searchOrders();
  }
}
