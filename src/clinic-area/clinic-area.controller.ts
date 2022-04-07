import {
  Controller,
  Get,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClinicArea } from '../common/entities/clinic_area';
import { ClinicAreaService } from './clinic-area.service';

@UsePipes(new ValidationPipe({ transform: true }))
@ApiTags('clinic-area')
@Controller('clinic-area')
export class ClinicAreaController {
  constructor(private readonly clinicAreaService: ClinicAreaService) {}

  @Get('')
  @ApiOperation({
    operationId: 'getAllClinicArea',
    summary: 'クリニックのある地域を全件取得',
    description: 'クリニックのある地域を全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: ClinicArea,
  })
  async getAllClinicArea(): Promise<ClinicArea[]> {
    return this.clinicAreaService.getAllClinicArea();
  }
}
