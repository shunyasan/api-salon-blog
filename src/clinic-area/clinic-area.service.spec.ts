import { Test, TestingModule } from '@nestjs/testing';
import { ClinicAreaService } from './clinic-area.service';

describe('ClinicAreaService', () => {
  let service: ClinicAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClinicAreaService],
    }).compile();

    service = module.get<ClinicAreaService>(ClinicAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
