import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderPlan } from 'src/common/dto/order_plan.dto';
import { PriceDto } from 'src/common/dto/price.dto';
import { PriceService } from './price.service';

@ApiTags('price')
@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get('order-plan')
  @ApiOperation({
    operationId: 'getPriceOrderPlan',
    summary: '選択された条件の価格を表示',
    description: '選択された条件の価格を表示',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: PriceDto,
  })
  async getPriceOrderPlan(@Query() orderPlan: OrderPlan): Promise<PriceDto[]> {
    return this.priceService.getPriceOrderPlan(orderPlan);
  }
}
