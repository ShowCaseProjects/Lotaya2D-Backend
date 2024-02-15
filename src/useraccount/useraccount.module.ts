import { Module } from '@nestjs/common';
import { UseraccountController } from './useraccount.controller';
import { UseraccountService } from './useraccount.service';
import {  LotayaWalletlibModule } from 'src/lotayalib';

@Module({
  controllers: [UseraccountController],
  providers: [UseraccountService,LotayaWalletlibModule],
  exports:[UseraccountService]
})
export class UseraccountModule {}
