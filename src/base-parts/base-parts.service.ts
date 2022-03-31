import { Injectable } from '@nestjs/common';
import { IdAndNameDto } from '@/src/common/dto/id_and_name.dto';
import { BaseParts } from 'src/common/entities/base_parts';
import { BasePartsRepository } from 'src/common/repository/basePartsRepository';

@Injectable()
export class BasePartsService {
  constructor(private readonly basePartsRepository: BasePartsRepository) {}

  async getAllBaseParts(): Promise<BaseParts[]> {
    return await this.basePartsRepository.getAllBaseParts();
  }

  async getBasePartsById(id: string): Promise<BaseParts> {
    return await this.basePartsRepository.getBasePartsById(id);
  }

  async getAllBasePartsIdAndName(
    aboutCategoryId: string,
  ): Promise<IdAndNameDto[]> {
    return await this.basePartsRepository.getAllBasePartsIdAndName(
      aboutCategoryId,
    );
  }

  async getAllBasePartsByAboutCategoryId(
    aboutCategoryId: string,
  ): Promise<BaseParts[]> {
    return await this.basePartsRepository.getAllBasePartsByAboutCategoryId(
      aboutCategoryId,
    );
  }

  async getBySortSelected(
    aboutCategoryId: string,
    partsId?: string,
  ): Promise<IdAndNameDto[]> {
    const parts = await this.basePartsRepository.getAllIdAndNameById(
      aboutCategoryId,
    );
    if (!partsId) {
      return parts;
    }
    const sortedAboutCategory = this.sortBySelectData(partsId, parts);
    return sortedAboutCategory;
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
