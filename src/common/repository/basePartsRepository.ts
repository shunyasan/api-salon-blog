import { EntityRepository, Repository } from 'typeorm';
import { PartsIdNameDto } from '../dto/parts_id_name.dto';
import { BaseParts } from '../entities/base_parts';

@EntityRepository(BaseParts)
export class BasePartsRepository extends Repository<BaseParts> {
  async getAllBaseParts(): Promise<BaseParts[]> {
    return await this.find();
  }

  async getBasePartsById(id: string): Promise<BaseParts> {
    return await this.findOne({ id: id });
  }

  async getAllBasePartsByAboutCategoryId(
    aboutCategoryId: string,
  ): Promise<PartsIdNameDto[]> {
    return await this.find({
      select: ['id', 'name'],
      where: { aboutCategoryId: aboutCategoryId },
    });
  }
}
