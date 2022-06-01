import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OriginCategory } from 'src/common/entities/origin_category';
import { OriginCategoryRepository } from 'src/common/repository/originCategoryRepository';
import { AboutCategoryService } from '../about-category/about-category.service';
import { IdAndNameDto } from '../common/dto/id_and_name.dto';
import { AboutCategory } from '../common/entities/about_category';
import { BasePartsRepository } from '../common/repository/basePartsRepository';

@Injectable()
export class OriginCategoryService {
  constructor(
    @InjectRepository(OriginCategoryRepository)
    private readonly originCategoryRepository: OriginCategoryRepository,
  ) {}
  async getAllOriginCategory(): Promise<OriginCategory[]> {
    return await this.originCategoryRepository.getAllOriginCategory();
  }

  async getOriginCategoryById(id: string): Promise<OriginCategory> {
    return await this.originCategoryRepository.getOriginCategoryById(id);
  }

  async getAllRelationParts(): Promise<OriginCategory[]> {
    return await this.originCategoryRepository.getAllRelationParts();
  }

  async getBySortSelected(originCategoryId: string): Promise<IdAndNameDto[]> {
    const originCategories =
      await this.originCategoryRepository.getAllIdAndName();
    const sortedAboutCategory = this.sortBySelectData(
      originCategoryId,
      originCategories,
    );
    return sortedAboutCategory;
  }

  async getOriginCategoryIdAndName(id: string): Promise<IdAndNameDto> {
    return this.originCategoryRepository.getIdAndName(id);
  }

  sortBySelectData(
    targetString: string,
    datas: IdAndNameDto[],
  ): IdAndNameDto[] {
    datas.forEach((data, int) => {
      if (data.id === targetString) {
        datas.splice(int, 1);
        datas.unshift(data);
      }
    });
    return datas;
  }
}
