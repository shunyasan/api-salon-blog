import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AboutCategory } from 'src/common/entities/about_category';
import { AboutCategoryRepository } from 'src/common/repository/aboutCategoryRepository';

@Injectable()
export class AboutCategoryService {
  constructor(
    @InjectRepository(AboutCategoryRepository)
    private aboutCategoryRepository: AboutCategoryRepository,
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
}
