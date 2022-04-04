import { Test, TestingModule } from '@nestjs/testing';
import { ClinicAreaController } from './clinic-area.controller';

describe('ClinicAreaController', () => {
  let controller: ClinicAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClinicAreaController],
    }).compile();

    controller = module.get<ClinicAreaController>(ClinicAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
