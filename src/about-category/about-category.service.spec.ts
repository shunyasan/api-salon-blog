import { Test, TestingModule } from '@nestjs/testing';
import { AboutCategoryService } from './about-category.service';

describe('AboutCategoryService', () => {
  let service: AboutCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutCategoryService],
    }).compile();

    service = module.get<AboutCategoryService>(AboutCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
