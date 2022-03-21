import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OriginCategory } from 'src/common/entities/origin_category';
import { OriginCategoryService } from './origin-category.service';

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
}
