import { Test, TestingModule } from '@nestjs/testing';
import { UserWithdrawAccountService } from './user-withdraw-account.service';

describe('UserWithdrawAccountService', () => {
  let service: UserWithdrawAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWithdrawAccountService],
    }).compile();

    service = module.get<UserWithdrawAccountService>(UserWithdrawAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
