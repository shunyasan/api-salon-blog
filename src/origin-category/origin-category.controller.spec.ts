import { Test, TestingModule } from '@nestjs/testing';
import { OriginCategoryController } from './origin-category.controller';

describe('OriginCategoryController', () => {
  let controller: OriginCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OriginCategoryController],
    }).compile();

    controller = module.get<OriginCategoryController>(OriginCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
