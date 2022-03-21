import { Test, TestingModule } from '@nestjs/testing';
import { AboutCategoryController } from './about-category.controller';

describe('AboutCategoryController', () => {
  let controller: AboutCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutCategoryController],
    }).compile();

    controller = module.get<AboutCategoryController>(AboutCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
