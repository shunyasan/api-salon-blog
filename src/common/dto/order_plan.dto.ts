import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

export class OrderPlan {
  @IsString()
  @ApiProperty({
    example: '女性',
    description: '性別',
  })
  gender: string;

  @IsString()
  @ApiProperty({
    example: '1回分',
    description: '料金体系',
  })
  paySystem: string;

  @IsString()
  @ApiProperty({
    example: 'Z000001',
    description: '広域カテゴリID',
  })
  originCategoryId: string;

  @IsString()
  @ApiProperty({
    example: 'A000003',
    description: '詳細カテゴリID',
  })
  aboutCategoryId: string;

  @IsString()
  @IsOptional()
  @ValidateIf((val) => val.partsId)
  @ApiPropertyOptional({
    example: 'B000025',
    description: '部位ID',
  })
  partsId?: string;

  @IsOptional()
  @ValidateIf((val) => val.skinCollor)
  @ApiPropertyOptional({
    example: '色黒',
    description: '肌色',
  })
  skinCollor?: string;

  @IsOptional()
  @ValidateIf((val) => val.hair)
  @ApiPropertyOptional({
    example: '太い',
    description: '毛の太さ',
  })
  hair?: string;
}
