import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class IdAndNameDto {
  @ApiProperty({
    example: 'partsテーブルの場合（B000001）',
    description: '該当テーブルのID',
  })
  @IsString()
  id: string;

  @ApiProperty({
    example: 'partsテーブルの場合（顔全体）',
    description: '名称',
  })
  @IsString()
  name: string;
}
