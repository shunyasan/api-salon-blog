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
import { ClinicNestPriceDto } from '../common/dto/clinic_nest_price.dto';
import { FeatureDto } from '../common/dto/feature.dto';
import { PagenationParameter } from '../common/parameter/pagenation.parameter';
import { FeatureService } from './feature.service';

@UsePipes(new ValidationPipe({ transform: true }))
@ApiTags('feature')
@Controller('feature')
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @Get('')
  @ApiOperation({
    operationId: 'getAllFeature',
    summary: '全ての特集を取得',
    description: '全ての特集を取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: FeatureDto,
  })
  async getAllFeature(): Promise<FeatureDto> {
    return this.featureService.getAllFeature();
  }

  @Get('count/:feature')
  @ApiOperation({
    operationId: 'getCountFeature',
    summary: '件数を取得',
    description: '件数を取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: Number,
  })
  async getCountFeature(@Param('feature') feature: string): Promise<number> {
    return this.featureService.getCountFeature(feature);
  }

  @Get(':feature')
  @ApiOperation({
    operationId: 'getFreeInstallments',
    summary: '該当の特集をページネーションで取得',
    description: '該当の特集をページネーションで取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: ClinicNestPriceDto,
  })
  async getFeature(
    @Param('feature') feature: string,
    @Query() pagenation: PagenationParameter,
  ): Promise<ClinicNestPriceDto[]> {
    return this.featureService.getFeature(feature, pagenation);
  }
}
