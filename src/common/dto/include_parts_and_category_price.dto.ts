import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { Clinic } from '../entities/clinic';
import { Parts } from '../entities/parts';
import { IdAndNameDto } from './id_and_name.dto';
import { PriceDto } from './price.dto';

export class IncludePartsAndCategoryPriceDto {
  @ApiProperty({
    type: IdAndNameDto,
    description: '広域カテゴリ[id,name]',
  })
  @Type(() => IdAndNameDto)
  originCategory: IdAndNameDto;

  @ApiProperty({
    type: IdAndNameDto,
    description: '詳細カテゴリ[id,name]',
  })
  @Type(() => IdAndNameDto)
  aboutCategory: IdAndNameDto;

  @ApiProperty({
    type: IdAndNameDto,
    description: '部位[id,name]',
  })
  @Type(() => IdAndNameDto)
  baseParts: IdAndNameDto;

  @ApiProperty({
    description: '価格の配列',
    isArray: true,
    type: PriceDto,
  })
  @Type(() => PriceDto)
  prices: PriceDto[];
}
