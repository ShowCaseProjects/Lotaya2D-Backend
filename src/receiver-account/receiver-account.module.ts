import { Module } from '@nestjs/common';
import { ReceiverAccountController } from './receiver-account.controller';
import { ReceiverAccountService } from './receiver-account.service';

@Module({
  controllers: [ReceiverAccountController],
  providers: [ReceiverAccountService],
})
export class ReceiverAccountModule {}
