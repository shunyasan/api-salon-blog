import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { AboutCategory } from '../entities/about_category';
import { BaseParts } from '../entities/base_parts';
import { Clinic } from '../entities/clinic';
import { OriginCategory } from '../entities/origin_category';
import { Parts } from '../entities/parts';

export class SelectedPartsCategoryDto {
  @ApiProperty({
    description: '該当の項目を先頭にした、広域カテゴリの全件',
    type: OriginCategory,
    isArray: true,
  })
  originCategories: OriginCategory[];

  @ApiProperty({
    description: '該当の項目を先頭にした、該当の広域カテゴリの詳細カテゴリ全件',
    type: AboutCategory,
    isArray: true,
  })
  aboutCategories: AboutCategory[];

  @ApiProperty({
    description: '該当の項目を先頭にした、該当の詳細カテゴリの基本部位全件',
    type: BaseParts,
    isArray: true,
  })
  baseParts: BaseParts[];
}
