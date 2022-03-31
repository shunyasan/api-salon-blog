import { EntityRepository, Repository } from 'typeorm';
import { AboutCategoryForIdAndName } from '../dto/about_category_for_id_and_name';
import { IdAndNameDto } from '../dto/id_and_name.dto';
import { AboutCategory } from '../entities/about_category';

@EntityRepository(AboutCategory)
export class AboutCategoryRepository extends Repository<AboutCategory> {
  async getAllAboutCategory(): Promise<AboutCategory[]> {
    return await this.find();
  }

  async getAboutCategoryById(id: string): Promise<AboutCategory> {
    return await this.findOne({ id: id });
  }

  async getIdNameTableNameAboutCategoryJoinOriginCategory(
    id: string,
  ): Promise<AboutCategoryForIdAndName> {
    return await this.createQueryBuilder('aboutCategory')
      .select([
        'aboutCategory.id',
        'aboutCategory.name',
        'aboutCategory.tableName',
        'originCategory.id',
        'originCategory.name',
      ])
      .innerJoinAndSelect('aboutCategory.origin', 'originCategory')
      .where('aboutCategory.id = :x_id', { x_id: id })
      .getOne();
  }

  async getAllAboutCategoryByOriginId(
    originId: string,
  ): Promise<AboutCategory[]> {
    return await this.find({ originId: originId });
  }

  async getAllIdAndNameById(id: string): Promise<IdAndNameDto[]> {
    return await this.find({ select: ['id', 'name'], where: { originId: id } });
  }
}
