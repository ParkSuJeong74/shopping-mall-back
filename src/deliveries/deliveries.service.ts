import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StartDeliveryDto } from './dto';

@Injectable()
export class DeliveriesService {
  constructor(private readonly prisma: PrismaService) {}

  async startDelivery(startDeliveryDto: StartDeliveryDto) {
    try {
      const delivery = await this.prisma.delivery.create({
        data: { order_id: startDeliveryDto.id },
      });
      return delivery;
    } catch (err) {
      throw new NotFoundException(
        '주문건에 대하여 발송처리를 완료하지 못했습니다.',
      );
    }
  }

  async updateState(id: number) {
    try {
      const delivery = await this.prisma.delivery.update({
        where: { id },
        data: { state: 'COMPLETE' },
      });
      return delivery;
    } catch (err) {
      throw new NotFoundException(
        '제품의 배송 상태를 배송 완료로 처리하지 못했습니다.',
      );
    }
  }
}
