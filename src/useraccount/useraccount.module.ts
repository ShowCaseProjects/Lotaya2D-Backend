import { Module } from '@nestjs/common';
import { UseraccountController } from './useraccount.controller';
import { UseraccountService } from './useraccount.service';
import { TwilioService } from 'src/twilio/twilio.service';
import { LotayaLibService } from 'src/lotayalib';

@Module({
  controllers: [UseraccountController],
  providers: [UseraccountService,LotayaLibService,TwilioService],
  exports:[UseraccountService]
})
export class UseraccountModule {}
