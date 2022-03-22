import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class OrderPlan {
  @ApiProperty({
    example: '女性',
    description: '性別',
  })
  @IsString()
  gender: string;

  @ApiProperty({
    example: '色黒',
    description: '肌色',
  })
  @IsString()
  skinCollor: string;

  @ApiProperty({
    example: '太い',
    description: '毛の太さ',
  })
  @IsString()
  hair: string;

  @ApiProperty({
    example: '1回分',
    description: '料金体系',
  })
  @IsString()
  paySystem: string;

  @ApiProperty({
    example: 'Z000001',
    description: '広域カテゴリID',
  })
  @IsString()
  originCategoryId: string;

  @ApiProperty({
    example: 'A000003',
    description: '詳細カテゴリID',
  })
  @IsString()
  aboutCategoryId: string;

  @ApiPropertyOptional({
    example: 'B000025',
    description: '部位ID',
  })
  @IsString()
  partsId: string | null;
}
