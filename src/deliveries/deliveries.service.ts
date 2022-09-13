import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StartDeliveryDto } from './dto';

@Injectable()
export class DeliveriesService {
  constructor(private readonly prisma: PrismaService) {}

  async startDelivery(startDeliveryDto: StartDeliveryDto) {
    try {
      const delivery = await this.prisma.delivery.create({
        data: { id: startDeliveryDto.id },
      });
      return delivery;
    } catch (err) {
      throw new NotFoundException(
        '주문건에 대하여 발송처리를 완료하지 못했습니다.',
      );
    }
  }
}
