import { Test, TestingModule } from '@nestjs/testing';
import { BasePartsService } from './base-parts.service';

describe('BasePartsService', () => {
  let service: BasePartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasePartsService],
    }).compile();

    service = module.get<BasePartsService>(BasePartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
