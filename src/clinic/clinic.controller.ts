import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { take } from 'rxjs';
import { ClinicNestPriceDto } from '../common/dto/clinic_nest_price.dto';
import { Clinic } from '../common/entities/clinic';
import { PagenationParameter } from '../common/parameter/pagenation.parameter';
import { ClinicService } from './clinic.service';

@UsePipes(new ValidationPipe({ transform: true }))
@ApiTags('clinic')
@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Get('clinic-nest-price/pagenation')
  async getAllClinicAndLimit(
    @Query() pagenation: PagenationParameter,
  ): Promise<ClinicNestPriceDto[]> {
    return this.clinicService.getAllClinicAndLimit(pagenation);
  }

  @Get('clinic-nest-price/area/:areaId/pagenation')
  async getAllClinicByAreaId(
    @Param('areaId') areaId: string,
    @Query() pagenation: PagenationParameter,
  ): Promise<ClinicNestPriceDto[]> {
    return this.clinicService.getAllClinicByAreaId(areaId, pagenation);
  }
}
