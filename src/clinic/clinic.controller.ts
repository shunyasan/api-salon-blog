import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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

  @Get('')
  @ApiOperation({
    operationId: 'getAllClinics',
    summary: 'クリニックを全件取得',
    description: 'クリニックを全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: Clinic,
  })
  async getAllClinics(): Promise<Clinic[]> {
    return this.clinicService.getAllClinics();
  }

  @Get('clinic-nest-price/pagenation')
  @ApiOperation({
    operationId: 'getAllClinicAndLimit',
    summary: 'クリニックをparameterで受け取った条件で取得',
    description: 'クリニックをparameterで受け取った条件で取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: ClinicNestPriceDto,
  })
  async getAllClinicAndLimit(
    @Query() pagenation: PagenationParameter,
  ): Promise<ClinicNestPriceDto[]> {
    return this.clinicService.getAllClinicAndLimit(pagenation);
  }

  @Get(':clinicId')
  @ApiOperation({
    operationId: 'getOneClinicAndLimit',
    summary: 'クリニック1件をparameterで受け取った条件で取得',
    description: 'クリニック1件をparameterで受け取った条件で取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: ClinicNestPriceDto,
  })
  async getOneClinicAndLimit(
    @Param('clinicId') clinicId: string,
  ): Promise<Clinic> {
    return this.clinicService.getOneClinicAndLimit(clinicId);
  }

  @Get('clinic-nest-price/area/:areaId/pagenation')
  @ApiOperation({
    operationId: 'getAllClinicByAreaId',
    summary: 'クリニックのある地域からをparameterで受け取った条件で取得',
    description: 'クリニックのある地域からをparameterで受け取った条件で取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: ClinicNestPriceDto,
  })
  async getAllClinicByAreaId(
    @Param('areaId') areaId: string,
    @Query() pagenation: PagenationParameter,
  ): Promise<ClinicNestPriceDto[]> {
    return this.clinicService.getAllClinicByAreaId(areaId, pagenation);
  }
}
