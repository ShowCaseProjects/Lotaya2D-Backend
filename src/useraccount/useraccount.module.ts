import { Module } from '@nestjs/common';
import { UseraccountController } from './useraccount.controller';
import { UseraccountService } from './useraccount.service';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { TwilioService } from 'src/twilio/twilio.service';

@Module({
  controllers: [UseraccountController],
  providers: [UseraccountService,LotayaLibService,TwilioService],
  exports:[UseraccountService]
})
export class UseraccountModule {}
