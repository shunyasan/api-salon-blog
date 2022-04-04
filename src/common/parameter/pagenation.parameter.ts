import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class PagenationParameter {
  @Type(() => Number)
  @IsNumber()
  @ApiProperty({
    example: 10,
    description: '取得件数',
  })
  take: number;

  @Type(() => Number)
  @IsNumber()
  @ApiProperty({
    example: 20,
    description: '先頭からOFFSETする数',
  })
  skip: number;
}
