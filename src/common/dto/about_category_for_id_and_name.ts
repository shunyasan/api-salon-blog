import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IdAndNameDto } from './id_and_name.dto';

export class AboutCategoryForIdAndName {
  @ApiProperty({
    example: 'A000001',
    description: 'AboutCategoryID',
  })
  @IsString()
  id: string;

  @ApiProperty({
    example: '顔セット',
    description: 'AboutCategoryの名称',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'PriceFaceSet',
    description: '価格テーブル名',
  })
  @IsString()
  tableName: string;

  @ApiProperty({
    example: 'PriceFaceSet',
    description: '価格テーブル名',
  })
  @IsString()
  origin: IdAndNameDto;
}
