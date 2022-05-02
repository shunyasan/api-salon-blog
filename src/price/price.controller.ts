import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderPlanParameter } from '@/src/common/parameter/order_plan.parameter';
import { PriceDto } from 'src/common/dto/price.dto';
import { IncludePartsAndCategoryPriceDto } from '../common/dto/include_parts_and_category_price.dto';
import { PagenationParameter } from '../common/parameter/pagenation.parameter';
import { PriceService } from './price.service';

@UsePipes(new ValidationPipe({ transform: true }))
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
    @Query() orderPlan: OrderPlanParameter,
    @Query() pagenation: PagenationParameter,
  ): Promise<IncludePartsAndCategoryPriceDto> {
    return this.priceService.getPriceOrderPlan(orderPlan, pagenation);
  }

  @Get('max-count')
  @ApiOperation({
    operationId: 'getPriceOrderPlan',
    summary: '選択された条件の価格を表示',
    description: '選択された条件の価格を表示',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: Number,
  })
  async getCountMaxPlan(
    @Query() orderPlan: OrderPlanParameter,
  ): Promise<number> {
    return this.priceService.getCountMaxPlan(orderPlan);
  }

  @Get('only-price/pagenation/clinic/:clinicId')
  @ApiOperation({
    operationId: 'getPlanByClinicId',
    summary: 'クリニックごとの価格を表示',
    description: 'クリニックごとの価格を表示',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: PriceDto,
  })
  async getPlanByClinicId(
    @Param('clinicId') clinicId: string,
    @Query() pagenation?: PagenationParameter,
  ): Promise<PriceDto[]> {
    return this.priceService.getPlanByClinicId(clinicId, pagenation);
  }

  @Get('clinic/:clinicId')
  @ApiOperation({
    operationId: 'getPriceByClinic',
    summary: 'クリニックごとの指定したAboutCategoryIdから価格を表示',
    description: 'クリニックごとの指定したAboutCategoryIdから価格を表示',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: PriceDto,
  })
  async getPriceByClinic(
    @Param('clinicId') clinicId: string,
    @Query('aboutId') aboutId: string,
  ): Promise<PriceDto[]> {
    return this.priceService.getPriceByClinic(clinicId, aboutId);
  }
}
