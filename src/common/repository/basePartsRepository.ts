import { EntityRepository, Repository } from 'typeorm';
import { BaseParts } from '../entities/base_parts';

@EntityRepository(BaseParts)
export class BasePartsRepository extends Repository<BaseParts> {
  async getAllBaseParts(): Promise<BaseParts[]> {
    return await this.find();
  }

  async getBasePartsById(id: string): Promise<BaseParts> {
    return await this.findOne({ id: id });
  }
}
