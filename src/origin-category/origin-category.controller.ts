import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OriginCategory } from 'src/common/entities/origin_category';
import { IdAndNameDto } from '../common/dto/id_and_name.dto';
import { OriginCategoryService } from './origin-category.service';

@UsePipes(new ValidationPipe({ transform: true }))
@ApiTags('originCategory')
@Controller('origin-category')
export class OriginCategoryController {
  constructor(private readonly originCategoryService: OriginCategoryService) {}

  @Get('')
  @ApiOperation({
    operationId: 'getAllOriginCategory',
    summary: '広域カテゴリを全件取得',
    description: '広域カテゴリを全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: OriginCategory,
  })
  async getAllOriginCategory(): Promise<OriginCategory[]> {
    return this.originCategoryService.getAllOriginCategory();
  }

  @Get('relation-parts')
  @ApiOperation({
    operationId: 'getAllRelationParts',
    summary: 'カテゴリにPartsをJoinして全件取得',
    description: 'カテゴリにPartsをJoinして全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: OriginCategory,
  })
  async getAllRelationParts(): Promise<OriginCategory[]> {
    return this.originCategoryService.getAllRelationParts();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'getOriginCategoryById',
    summary: '広域カテゴリを1件取得',
    description: '広域カテゴリを1件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: OriginCategory,
  })
  async getOriginCategoryById(
    @Param('id') id: string,
  ): Promise<OriginCategory> {
    return this.originCategoryService.getOriginCategoryById(id);
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
    @Query('originCategoryId') originCategoryId: string,
  ): Promise<IdAndNameDto[]> {
    return this.originCategoryService.getBySortSelected(originCategoryId);
  }
}
