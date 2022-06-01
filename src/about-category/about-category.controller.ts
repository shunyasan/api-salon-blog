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
import { AboutCategory } from 'src/common/entities/about_category';
import { IdAndNameDto } from '../common/dto/id_and_name.dto';
import { AboutCategoryService } from './about-category.service';

@UsePipes(new ValidationPipe({ transform: true }))
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
    isArray: true,
    type: AboutCategory,
  })
  async getAllAboutCategoryByOriginId(
    @Param('originId') originId: string,
  ): Promise<AboutCategory[]> {
    return this.aboutCategoryService.getAllAboutCategoryByOriginId(originId);
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
    @Query('aboutCategoryId') aboutCategoryId?: string,
  ): Promise<IdAndNameDto[]> {
    return this.aboutCategoryService.getBySortSelected(
      originCategoryId,
      aboutCategoryId,
    );
  }

  @Get('id-and-name/:id')
  @ApiOperation({
    operationId: 'getAboutCategoryIdAndName',
    summary: 'AboutCategory<IdAndName>を1件取得',
    description: 'AboutCategory<IdAndName>を1件取得',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: IdAndNameDto,
  })
  async getAboutCategoryIdAndName(
    @Param('id') id: string,
  ): Promise<IdAndNameDto> {
    return this.aboutCategoryService.getAboutCategoryIdAndName(id);
  }
}
