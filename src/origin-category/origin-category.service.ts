import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OriginCategory } from 'src/common/entities/origin_category';
import { OriginCategoryRepository } from 'src/common/repository/originCategoryRepository';

@Injectable()
export class OriginCategoryService {
  constructor(
    @InjectRepository(OriginCategoryRepository)
    private originCategoryRepository: OriginCategoryRepository,
  ) {}
  async getAllOriginCategory(): Promise<OriginCategory[]> {
    return await this.originCategoryRepository.getAllOriginCategory();
  }

  async getOriginCategoryById(id: string): Promise<OriginCategory> {
    return await this.originCategoryRepository.getOriginCategoryById(id);
  }
}
