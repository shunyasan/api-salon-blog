import { Test, TestingModule } from '@nestjs/testing';
import { IdAndNameService } from './id-and-name.service';

describe('IdAndNameService', () => {
  let service: IdAndNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdAndNameService],
    }).compile();

    service = module.get<IdAndNameService>(IdAndNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
