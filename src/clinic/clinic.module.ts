import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicRepository } from '../common/repository/clinicRepository';
import { PriceModule } from '../price/price.module';

@Module({
  imports: [TypeOrmModule.forFeature([ClinicRepository]), PriceModule],
  controllers: [ClinicController],
  providers: [ClinicService],
})
export class ClinicModule {}
