import { Body, Controller, HttpCode, Param, Post, Put } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
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

  @HttpCode(204)
  @Put('complete/:id')
  @ApiOperation({
    summary: '제품 배송 완료 API',
    description: '제품 배송 완료로 처리한다.',
  })
  @ApiResponse({
    status: 204,
    description: '제품 배송 완료 성공',
  })
  @ApiParam({ name: 'id', required: true, description: '배송 아이디' })
  async updateState(@Param('id') id: number) {
    return await this.deliveriesService.updateState(id);
  }
}
