import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrders(id: number): Promise<Order> {
    try {
      const order: Order = await this.prisma.order.findUnique({
        where: { id },
      });
      return order;
    } catch (err) {
      throw new NotFoundException('제품 주문 내역을 열람하지 못했습니다.');
    }
  }

  async searchOrders() {}
}
