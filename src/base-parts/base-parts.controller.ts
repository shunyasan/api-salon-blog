import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseParts } from 'src/common/entities/base_parts';
import { BasePartsService } from './base-parts.service';

@ApiTags('baseParts')
@Controller('base-parts')
export class BasePartsController {
  constructor(private readonly basePartsService: BasePartsService) {}

  @Get('')
  @ApiOperation({
    operationId: 'getAllBaseParts',
    summary: '基本部位を全件取得',
    description: '基本部位を全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: BaseParts,
  })
  async getAllBaseParts(): Promise<BaseParts[]> {
    return this.basePartsService.getAllBaseParts();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'getBasePartsById',
    summary: '基本部位を1件取得',
    description: '基本部位を1件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: BaseParts,
  })
  async getBasePartsById(@Param('id') id: string): Promise<BaseParts> {
    return this.basePartsService.getBasePartsById(id);
  }
}
