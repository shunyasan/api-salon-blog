import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

export class OrderPlanParameter {
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
    example: '白色',
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

  @IsOptional()
  @ApiPropertyOptional({
    example: '完全個室',
    description: '施術室のタイプ',
  })
  roomType?: string;

  @IsOptional()
  @ApiPropertyOptional({
    example: '豪華',
    description: '内装',
  })
  interior?: string;

  // DB 1:女性 2:男性 3:女性男性 省くNo.を入力
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({
    example: 2,
    description: '施術者の除外する性別',
  })
  staff?: number;

  @IsOptional()
  @ApiPropertyOptional({
    example: 'OK',
    description: 'カードの利用可否',
  })
  card?: string;

  @IsOptional()
  @ApiPropertyOptional({
    example: 'OK',
    description: '医療ローンの可否',
  })
  loan?: string;

  @IsOptional()
  @ApiPropertyOptional({
    example: 'OK',
    description: '解約の可否',
  })
  contract?: string;

  @IsOptional()
  @Type(() => Array)
  @ApiPropertyOptional({
    example: '',
    description: '無料オプション',
  })
  option?: string[];
}
