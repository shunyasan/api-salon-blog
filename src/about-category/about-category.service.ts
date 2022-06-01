import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AboutCategory } from 'src/common/entities/about_category';
import { AboutCategoryRepository } from 'src/common/repository/aboutCategoryRepository';
import { IdAndNameDto } from '../common/dto/id_and_name.dto';

@Injectable()
export class AboutCategoryService {
  constructor(
    @InjectRepository(AboutCategoryRepository)
    private readonly aboutCategoryRepository: AboutCategoryRepository,
  ) {}
  async getAllAboutCategory(): Promise<AboutCategory[]> {
    return await this.aboutCategoryRepository.getAllAboutCategory();
  }

  async getAboutCategoryById(id: string): Promise<AboutCategory> {
    return await this.aboutCategoryRepository.getAboutCategoryById(id);
  }

  async getAllAboutCategoryByOriginId(
    originId: string,
  ): Promise<AboutCategory[]> {
    return await this.aboutCategoryRepository.getAllAboutCategoryByOriginId(
      originId,
    );
  }
  async getBySortSelected(
    originCategoryId: string,
    aboutCategoryId?: string,
  ): Promise<IdAndNameDto[]> {
    const aboutCategories =
      await this.aboutCategoryRepository.getAllIdAndNameById(originCategoryId);
    if (!aboutCategoryId) {
      return aboutCategories;
    }
    const sortedAboutCategory = this.sortBySelectData(
      aboutCategoryId,
      aboutCategories,
    );
    return sortedAboutCategory;
  }

  async getAboutCategoryIdAndName(id: string): Promise<IdAndNameDto> {
    return this.aboutCategoryRepository.getIdAndName(id);
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
