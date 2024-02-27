import { Module } from '@nestjs/common';
import { UseraccountController } from './useraccount.controller';
import { UseraccountService } from './useraccount.service';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';

@Module({
  controllers: [UseraccountController],
  providers: [UseraccountService, LotayaLibService],
  exports: [UseraccountService],
})
export class UseraccountModule {}
