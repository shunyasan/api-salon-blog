import { EntityRepository, Repository } from 'typeorm';
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

  async getPriceTableName(id: string): Promise<string> {
    const getTableName = await this.findOne({
      select: ['tableName'],
      where: { id: id },
    });
    const data = getTableName.tableName;
    return data;
  }

  async getAllAboutCategoryByOriginId(
    originId: string,
  ): Promise<AboutCategory[]> {
    const data = await this.find({
      where: { originId: originId },
      order: { id: 'ASC' },
    });
    return data;
  }

  async getAllIdAndNameById(id: string): Promise<IdAndNameDto[]> {
    return await this.find({ select: ['id', 'name'], where: { originId: id } });
  }
}
