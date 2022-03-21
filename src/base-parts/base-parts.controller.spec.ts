import { Test, TestingModule } from '@nestjs/testing';
import { BasePartsController } from './base-parts.controller';

describe('BasePartsController', () => {
  let controller: BasePartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasePartsController],
    }).compile();

    controller = module.get<BasePartsController>(BasePartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
