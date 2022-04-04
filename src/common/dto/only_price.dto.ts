import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
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

  @Type(() => Number)
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: '性別 1:女性 2:男性 3:女性・男性',
  })
  gender: number;

  @Type(() => Number)
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: '回数',
  })
  times: number;

  @Type(() => Number)
  @IsNumber()
  @ApiProperty({
    example: 10000,
    description: '総額の価格',
  })
  price: number;

  @Type(() => Number)
  @IsNumber()
  @ApiProperty({
    example: 1000,
    description: '１回分の価格',
  })
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
