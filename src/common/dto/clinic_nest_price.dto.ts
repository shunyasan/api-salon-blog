import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { Clinic } from '../entities/clinic';
import { ClinicOpeningHours } from '../entities/clinic_opening_hours';
import { ClinicOption } from '../entities/clinic_option';
import { IdAndNameDto } from './id_and_name.dto';
import { OnlyPriceDto } from './only_price.dto';
import { PriceDto } from './price.dto';

export class ClinicNestPriceDto {
  @ApiProperty({
    example: 'A000001',
    description: 'AboutCategoryID',
  })
  @IsString()
  id: string;

  @ApiProperty({
    example: '豪華',
    description: '内装',
  })
  @IsString()
  interior: string;

  @ApiProperty({
    example: '東京都****',
    description: '住所',
  })
  @IsString()
  address: string;

  @ApiProperty({
    example: 'OK',
    description: 'カード払い',
  })
  @IsString()
  cardPay: string;

  @ApiProperty({
    example: 'OK',
    description: 'ローン払い',
  })
  @IsString()
  medhicalLoan: string;

  @ApiProperty({
    example: '顔全体',
    description: 'コース名',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: '新宿',
    description: '最寄駅',
  })
  @IsString()
  nearestStation: string;

  @ApiProperty({
    example: '良好',
    description: '予約のステータス',
  })
  @IsString()
  reserve: string;

  @ApiProperty({
    example: '3.7',
    description: 'レビュー',
  })
  @IsNumber()
  review: number;

  @ApiProperty({
    example: '完全個室',
    description: '部屋のタイプ',
  })
  @IsString()
  roomType: string;

  @ApiProperty({
    example: '1',
    description: '性別　1:女性 2:男性 3:女性・男性',
  })
  @IsNumber()
  staffGender: number;

  @ApiProperty({
    example: '税込',
    description: '消費税',
  })
  @IsString()
  tax: string;

  @ApiProperty({
    example: '080-***',
    description: '電話番号',
  })
  @IsString()
  tel: string;

  @ApiProperty({
    example: 'https://***',
    description: 'Url',
  })
  @IsString()
  url: string;

  @IsString()
  areaId: string;

  @ValidateNested()
  @Type(() => ClinicOpeningHours)
  clinicOpeningHours: ClinicOpeningHours[];

  @ValidateNested()
  @Type(() => ClinicOption)
  clinicOption: ClinicOption;

  @ValidateNested()
  @Type(() => OnlyPriceDto)
  onlyPrices: OnlyPriceDto[];

  static ClinicToClinicNestPriceDto(
    clinic: Clinic,
    onlyPrices: OnlyPriceDto[],
  ): ClinicNestPriceDto {
    const data: ClinicNestPriceDto = {
      id: clinic.id,
      interior: clinic.interior,
      address: clinic.address,
      cardPay: clinic.cardPay,
      medhicalLoan: clinic.medhicalLoan,
      name: clinic.name,
      nearestStation: clinic.nearestStation,
      reserve: clinic.reserve,
      review: clinic.review,
      roomType: clinic.roomType,
      staffGender: clinic.staffGender,
      tax: clinic.tax,
      tel: clinic.tel,
      url: clinic.url,
      areaId: clinic.areaId,
      clinicOpeningHours: clinic.clinicOpeningHours,
      clinicOption: clinic.clinicOption,
      onlyPrices: onlyPrices,
    };
    return data;
  }
}
