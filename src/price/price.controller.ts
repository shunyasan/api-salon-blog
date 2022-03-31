import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderPlan } from 'src/common/dto/order_plan.dto';
import { PriceDto } from 'src/common/dto/price.dto';
import { IncludePartsAndCategoryPriceDto } from '../common/dto/include_parts_and_category_price.dto';
import { OnlyPriceDto } from '../common/dto/only_price.dto';
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
    type: IncludePartsAndCategoryPriceDto,
  })
  async getPriceOrderPlan(
    @Query() orderPlan: OrderPlan,
  ): Promise<IncludePartsAndCategoryPriceDto> {
    return this.priceService.getPriceOrderPlan(orderPlan);
  }

  @Get('only-price/clinic/:clinicId')
  @ApiOperation({
    operationId: 'getPlanByClinicId',
    summary: 'クリニックごとの価格を表示',
    description: 'クリニックごとの価格を表示',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: OnlyPriceDto,
  })
  async getPlanByClinicId(
    @Param('clinicId') clinicId: string,
  ): Promise<OnlyPriceDto[]> {
    return this.priceService.getPlanByClinicId(clinicId);
  }
}
