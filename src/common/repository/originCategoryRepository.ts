import { EntityRepository, Repository } from 'typeorm';
import { OriginCategory } from '../entities/origin_category';

@EntityRepository(OriginCategory)
export class OriginCategoryRepository extends Repository<OriginCategory> {
  async getAllOriginCategory(): Promise<OriginCategory[]> {
    return await this.find();
  }

  async getOriginCategoryById(id: string): Promise<OriginCategory> {
    return await this.findOne({ id: id });
  }
}
