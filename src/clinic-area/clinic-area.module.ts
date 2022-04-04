import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicAreaRepository } from '../common/repository/clinicAreaRepository';
import { ClinicAreaController } from './clinic-area.controller';
import { ClinicAreaService } from './clinic-area.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClinicAreaRepository])],
  controllers: [ClinicAreaController],
  providers: [ClinicAreaService],
})
export class ClinicAreaModule {}
