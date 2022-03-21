import { Injectable } from '@nestjs/common';
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
}
