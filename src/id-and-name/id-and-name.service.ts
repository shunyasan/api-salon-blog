import { Injectable } from '@nestjs/common';
import { IdAndNameDto } from '../common/dto/id_and_name.dto';
import { OriginCategoryRepository } from '../common/repository/originCategoryRepository';

@Injectable()
export class IdAndNameService {
  constructor(
    private readonly originCategoryRepository: OriginCategoryRepository,
  ) {}

  async getAllOriginCategory(): Promise<IdAndNameDto[]> {
    return this.originCategoryRepository.getAllIdAndName();
  }
}
