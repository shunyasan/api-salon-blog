import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { Clinic } from '../entities/clinic';
import { Parts } from '../entities/parts';

export class PriceDto {
  @IsString()
  @ApiProperty({
    example: 'AAB000001',
    description: 'Price*ID',
  })
  id: string;

  @IsString()
  @ApiProperty({
    example: '顔全体',
    description: '部位の名称',
  })
  name: string;

  @ApiProperty({
    example: 1,
    description: '性別 1:女性 2:男性 3:女性男性',
  })
  gender: number;

  @ApiProperty({
    example: 1,
    description: '回数',
  })
  times: number;

  @ApiProperty({
    example: 10000,
    description: '価格',
  })
  price: number;

  @ApiProperty({
    example: 1000,
    description: '1回分の価格',
  })
  once_price: number;

  @IsString()
  @ApiProperty({
    example: '期間限定',
    description: '備考',
  })
  description: string;

  @ValidateNested()
  @Type(() => Parts)
  @ApiProperty({
    description: '部位',
    type: Parts,
  })
  parts: Parts;

  @ValidateNested()
  @Type(() => Clinic)
  @ApiProperty({
    description: 'クリニック',
    type: Clinic,
  })
  clinic: Clinic;
}
