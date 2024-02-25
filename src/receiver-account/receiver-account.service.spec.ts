import { Test, TestingModule } from '@nestjs/testing';
import { ReceiverAccountService } from './receiver-account.service';

describe('ReceiverAccountService', () => {
  let service: ReceiverAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceiverAccountService],
    }).compile();

    service = module.get<ReceiverAccountService>(ReceiverAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
