import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AboutCategory } from 'src/common/entities/about_category';
import { AboutCategoryService } from './about-category.service';

@ApiTags('aboutCategory')
@Controller('about-category')
export class AboutCategoryController {
  constructor(private readonly aboutCategoryService: AboutCategoryService) {}

  @Get('')
  @ApiOperation({
    operationId: 'getAllAboutCategory',
    summary: '詳細カテゴリを全件取得',
    description: '詳細カテゴリを全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    isArray: true,
    type: AboutCategory,
  })
  async getAllAboutCategory(): Promise<AboutCategory[]> {
    return this.aboutCategoryService.getAllAboutCategory();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'getAboutCategoryById',
    summary: '詳細カテゴリを1件取得',
    description: '詳細カテゴリを1件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: AboutCategory,
  })
  async getAboutCategoryById(@Param('id') id: string): Promise<AboutCategory> {
    return this.aboutCategoryService.getAboutCategoryById(id);
  }

  @Get('originId/:originId')
  @ApiOperation({
    operationId: 'getAllAboutCategoryByOriginId',
    summary: '詳細カテゴリを広域カテゴリIDから全件取得',
    description: '詳細カテゴリを広域カテゴリIDから全件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: AboutCategory,
  })
  async getAllAboutCategoryByOriginId(
    @Param('originId') originId: string,
  ): Promise<AboutCategory[]> {
    return this.aboutCategoryService.getAllAboutCategoryByOriginId(originId);
  }
}
