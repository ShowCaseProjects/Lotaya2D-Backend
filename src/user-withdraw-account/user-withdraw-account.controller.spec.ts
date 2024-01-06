import { Test, TestingModule } from '@nestjs/testing';
import { UserWithdrawAccountController } from './user-withdraw-account.controller';

describe('UserWithdrawAccountController', () => {
  let controller: UserWithdrawAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserWithdrawAccountController],
    }).compile();

    controller = module.get<UserWithdrawAccountController>(UserWithdrawAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
