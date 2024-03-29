import { EntityRepository, Not, Repository } from 'typeorm';
import { IdAndNameDto } from '../dto/id_and_name.dto';
import { BaseParts } from '../entities/base_parts';

@EntityRepository(BaseParts)
export class BasePartsRepository extends Repository<BaseParts> {
  async getAllBaseParts(): Promise<BaseParts[]> {
    return await this.find();
  }

  async getBasePartsById(id: string): Promise<BaseParts> {
    return await this.findOne({ id: id });
  }

  async getAllBasePartsIdAndName(
    aboutCategoryId: string,
  ): Promise<IdAndNameDto[]> {
    const data = await this.find({
      select: ['id', 'name'],
      where: { aboutCategoryId: aboutCategoryId },
    });
    return data;
  }

  async getAllIdAndNameById(id: string): Promise<IdAndNameDto[]> {
    return await this.find({
      select: ['id', 'name'],
      where: { aboutCategoryId: id },
    });
  }

  async getAllBasePartsByAboutCategoryId(
    id: string,
    gender?: string,
  ): Promise<BaseParts[]> {
    const genderNum = gender && gender === '男性' ? 1 : 2;
    return await this.find({
      where: { aboutCategoryId: id, gender: gender ? Not(genderNum) : 3 },
    });
  }

  async getIdAndName(id: string): Promise<IdAndNameDto> {
    const get = await this.findOne({
      select: ['id', 'name'],
      where: { id: id },
    });
    const change = get as IdAndNameDto;
    return change;
  }
}
