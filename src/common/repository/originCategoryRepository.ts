import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { IdAndNameDto } from '../dto/id_and_name.dto';
import { OriginCategory } from '../entities/origin_category';

@EntityRepository(OriginCategory)
export class OriginCategoryRepository extends Repository<OriginCategory> {
  async getAllOriginCategory(): Promise<OriginCategory[]> {
    const data = await this.find({ order: { id: 'ASC' } });
    return data;
  }

  async getOriginCategoryById(id: string): Promise<OriginCategory> {
    return await this.findOne({ id: id });
  }

  async getAllRelationParts(): Promise<OriginCategory[]> {
    return await this.createQueryBuilder('OriginCategory')
      .innerJoinAndSelect('OriginCategory.aboutCategory', 'aboutCategory')
      .innerJoinAndSelect('aboutCategory.baseParts', 'baseParts')
      .getMany();
  }

  async getAllIdAndName(): Promise<IdAndNameDto[]> {
    const get = await this.find({
      select: ['id', 'name'],
      order: { id: 'ASC' },
    });
    const change = get as IdAndNameDto[];
    return change;
  }
}
