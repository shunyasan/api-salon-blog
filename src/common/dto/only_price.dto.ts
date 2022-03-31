import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { Clinic } from '../entities/clinic';
import { ClinicOpeningHours } from '../entities/clinic_opening_hours';
import { ClinicOption } from '../entities/clinic_option';
import { IdAndNameDto } from './id_and_name.dto';
import { PriceDto } from './price.dto';

export class OnlyPriceDto {
  @ApiProperty({
    example: 'A000001',
    description: 'AboutCategoryID',
  })
  @IsString()
  id: string;

  @ApiProperty({
    example: '顔全体',
    description: 'コース名',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 1,
    description: '性別 1:女性 2:男性 3:女性・男性',
  })
  @IsNumber()
  gender: number;

  @ApiProperty({
    example: 1,
    description: '回数',
  })
  @IsNumber()
  times: number;

  @ApiProperty({
    example: 10000,
    description: '総額の価格',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 1000,
    description: '１回分の価格',
  })
  @IsNumber()
  oncePrice: number;

  @ApiProperty({
    example: '備考',
    description: '備考',
  })
  @IsString()
  description: string;

  static PriceDtoToOnlyPriceDto(prices: PriceDto): OnlyPriceDto {
    const data: OnlyPriceDto = {
      id: prices.id,
      name: prices.name,
      gender: prices.gender,
      times: prices.times,
      price: prices.price,
      oncePrice: prices.oncePrice,
      description: prices.description,
    };
    return data;
  }
}
