import { Test, TestingModule } from '@nestjs/testing';
import { ReceiverAccountController } from './receiver-account.controller';

describe('ReceiverAccountController', () => {
  let controller: ReceiverAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceiverAccountController],
    }).compile();

    controller = module.get<ReceiverAccountController>(
      ReceiverAccountController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
