import { EntityRepository, Repository } from 'typeorm';
import { AboutCategory } from '../entities/about_category';

@EntityRepository(AboutCategory)
export class AboutCategoryRepository extends Repository<AboutCategory> {
  async getAllAboutCategory(): Promise<AboutCategory[]> {
    return await this.find();
  }

  async getAboutCategoryById(id: string): Promise<AboutCategory> {
    return await this.findOne({ id: id });
  }

  async getAllAboutCategoryByOriginId(
    originId: string,
  ): Promise<AboutCategory[]> {
    return await this.find({ originId: originId });
  }
}
