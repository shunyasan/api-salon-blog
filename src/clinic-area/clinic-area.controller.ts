import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClinicArea } from '../common/entities/clinic_area';
import { ClinicAreaService } from './clinic-area.service';

@ApiTags('clinic-area')
@Controller('clinic-area')
export class ClinicAreaController {
  constructor(private readonly clinicAreaService: ClinicAreaService) {}

  @Get('')
  async getAllClinicArea(): Promise<ClinicArea[]> {
    return this.clinicAreaService.getAllClinicArea();
  }
}
