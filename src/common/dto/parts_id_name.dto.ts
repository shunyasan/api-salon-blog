import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PartsIdNameDto {
  @ApiProperty({
    example: 'B000001',
    description: 'パーツID',
  })
  @IsString()
  id: string;

  @ApiProperty({
    example: '顔全体',
    description: 'パーツID',
  })
  @IsString()
  name: string;
}
