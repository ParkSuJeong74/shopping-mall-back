import { Controller, Get, HttpCode, Logger, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Order } from '@prisma/client';
import { OrdersService } from './orders.service';

@ApiTags('Orders API')
@Controller('orders')
export class OrdersController {
  private readonly logger = new Logger(`OrdersController`);
  constructor(private readonly ordersService: OrdersService) {}

  @HttpCode(200)
  @Get(':id')
  @ApiOperation({
    summary: '제품 주문 내역 열람 API',
    description: '제품 주문 내역을 열람한다.',
  })
  @ApiResponse({
    status: 200,
    description: '제품 주문 내역 열람 성공',
  })
  @ApiParam({ name: 'id', required: true, description: '주문 아이디' })
  async getOrders(@Param('id') id: number): Promise<Order> {
    return await this.ordersService.getOrders(id);
  }

  // 주문 상태, 시작일자, 종료일자, 주문자명
  @Get('search')
  async searchOrders() {
    return await this.ordersService.searchOrders();
  }
}
