import { Test, TestingModule } from '@nestjs/testing';
import { OriginCategoryService } from './origin-category.service';

describe('OriginCategoryService', () => {
  let service: OriginCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OriginCategoryService],
    }).compile();

    service = module.get<OriginCategoryService>(OriginCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
