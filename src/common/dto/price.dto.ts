import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { Clinic } from '../entities/clinic';
import { Parts } from '../entities/parts';

export class PriceDto {
  @IsString()
  @ApiProperty({
    example: 'AAB000001',
    description: 'Price{tableName}ID',
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
  oncePrice: number;

  @IsString()
  @ApiProperty({
    example: '期間限定',
    description: '備考',
  })
  description: string;

  @IsString()
  @ApiProperty({
    example: 'B000001',
    description: '部位ID',
  })
  partsId: string;

  @IsString()
  @ApiProperty({
    example: 'AA000001',
    description: 'クリニックID',
  })
  clinicId: string;

  @Exclude()
  @ValidateNested()
  @Type(() => Parts)
  @ApiProperty({
    description: '部位',
    type: Parts,
  })
  parts: Parts;

  @Exclude()
  @ValidateNested()
  @Type(() => Clinic)
  @ApiProperty({
    description: 'クリニック',
    type: Clinic,
  })
  clinic: Clinic;
}
