import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { Clinic } from '../entities/clinic';
import { ClinicOpeningHours } from '../entities/clinic_opening_hours';
import { ClinicOption } from '../entities/clinic_option';
import { IdAndNameDto } from './id_and_name.dto';
import { PriceDto } from './price.dto';

export class ClinicNestPriceDto {
  // @ApiProperty({
  //   example: 'A000001',
  //   description: 'AboutCategoryID',
  // })
  // @IsString()
  // id: string;
}
