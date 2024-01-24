import { Module } from '@nestjs/common';
import { UserWithdrawMethodController } from './user-withdraw-method.controller';
import { UserWithdrawMethodService } from './user-withdraw-method.service';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';

@Module({
  controllers: [UserWithdrawMethodController],
  providers: [UserWithdrawMethodService,LotayaLibService],
  exports:[UserWithdrawMethodService]
})
export class UserWithdrawMethodModule {}
