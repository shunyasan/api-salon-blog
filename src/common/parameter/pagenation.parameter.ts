import { UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class PagenationParameter {
  @IsNumber()
  @ApiProperty({
    example: 10,
    description: '取得件数',
  })
  take: number;

  @IsNumber()
  @ApiProperty({
    example: 20,
    description: '先頭からOFFSETする数',
  })
  skip: number;
}
