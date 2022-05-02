import { Test, TestingModule } from '@nestjs/testing';
import { IdAndNameController } from './id-and-name.controller';

describe('IdAndNameController', () => {
  let controller: IdAndNameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdAndNameController],
    }).compile();

    controller = module.get<IdAndNameController>(IdAndNameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
