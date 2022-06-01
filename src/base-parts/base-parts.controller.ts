import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IdAndNameDto } from '@/src/common/dto/id_and_name.dto';
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
    isArray: true,
    type: BaseParts,
  })
  async getAllBasePartsByAboutCategoryId(
    @Param('aboutCategoryId') aboutCategoryId: string,
    @Query('gender') gender?: string,
  ): Promise<BaseParts[]> {
    return this.basePartsService.getAllBasePartsByAboutCategoryId(
      aboutCategoryId,
      gender,
    );
  }

  @Get('id-and-name/aboutCategoryId/:aboutCategoryId')
  @ApiOperation({
    operationId: 'getAllAboutCategoryByAboutCategoryId',
    summary: '部位を詳細カテゴリIDから全件取得',
    description: '部位を詳細カテゴリIDから全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: IdAndNameDto,
  })
  async getAllBasePartsIdAndName(
    @Param('aboutCategoryId') aboutCategoryId: string,
  ): Promise<IdAndNameDto[]> {
    return this.basePartsService.getAllBasePartsIdAndName(aboutCategoryId);
  }

  @Get('id-and-name/sort-selected')
  @ApiOperation({
    operationId: 'getBySortSelected',
    summary: '該当のデータを先頭に並び替え全件取得',
    description: '該当のデータを先頭に並び替え全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: IdAndNameDto,
  })
  async getBySortSelected(
    @Query('aboutCategoryId') aboutCategoryId: string,
    @Query('partsId') partsId?: string,
    // これをoptionalに。
  ): Promise<IdAndNameDto[]> {
    return this.basePartsService.getBySortSelected(aboutCategoryId, partsId);
  }

  @Get('id-and-name/:id')
  @ApiOperation({
    operationId: 'getBasePartsIdAndName',
    summary: 'BaseParts<IdAndName>を1件取得',
    description: 'BaseParts<IdAndName>を1件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: IdAndNameDto,
  })
  async getBasePartsIdAndName(@Param('id') id: string): Promise<IdAndNameDto> {
    return this.basePartsService.getBasePartsIdAndName(id);
  }
}
