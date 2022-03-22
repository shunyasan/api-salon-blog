import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PartsIdNameDto } from 'src/common/dto/parts_id_name.dto';
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

  @Get('aboutCategoryId/:aboutCategoryId')
  @ApiOperation({
    operationId: 'getAllAboutCategoryByAboutCategoryId',
    summary: '部位を詳細カテゴリIDから全件取得',
    description: '部位を詳細カテゴリIDから全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: BaseParts,
  })
  async getAllBasePartsByAboutCategoryId(
    @Param('aboutCategoryId') aboutCategoryId: string,
  ): Promise<PartsIdNameDto[]> {
    return this.basePartsService.getAllBasePartsByAboutCategoryId(
      aboutCategoryId,
    );
  }
}
