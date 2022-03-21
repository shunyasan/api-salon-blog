import { Controller, Get, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClinicService } from './clinic.service';

@ApiTags('clinic')
@Controller('clinic')
export class ClinicController {
  constructor(
    @Inject('ClinicService')
    private readonly clinicService: ClinicService,
  ) {}

  @Get('test')
  async test(): Promise<void> {
    console.log('test');
  }
}
