import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { Clinic } from '../entities/clinic';
import { ClinicOpeningHours } from '../entities/clinic_opening_hours';
import { ClinicOption } from '../entities/clinic_option';
import { IdAndNameDto } from './id_and_name.dto';
import { PriceDto } from './price.dto';

export class FeatureDto {
  @ValidateNested()
  @ApiProperty({
    type: Clinic,
    isArray: true,
    description: '麻酔が無料の特集',
  })
  anesthesia: Clinic[];

  @ValidateNested()
  @ApiProperty({
    type: Clinic,
    isArray: true,
    description: '分割払いができる特集',
  })
  installments: Clinic[];

  @ValidateNested()
  @ApiProperty({
    type: Clinic,
    isArray: true,
    description: '内装が豪華なクリニック特集',
  })
  interior: Clinic[];

  @ValidateNested()
  @ApiProperty({
    type: Clinic,
    isArray: true,
    description: '完全個室の特集',
  })
  privateRoom: Clinic[];

  @ValidateNested()
  @ApiProperty({
    type: Clinic,
    isArray: true,
    description: '学生料金のあるクリニックの特集',
  })
  sutudentDiscount: Clinic[];

  @ValidateNested()
  @ApiProperty({
    type: Clinic,
    isArray: true,
    description: 'が無料の特集',
  })
  visitFee: Clinic[];
}
