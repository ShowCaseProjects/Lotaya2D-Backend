import { Module } from '@nestjs/common';
import { UserWithdrawMethodController } from './user-withdraw-method.controller';
import { UserWithdrawMethodService } from './user-withdraw-method.service';
import { LotayaLibService } from 'src/lotayalib';
import { Gateway } from 'src/gateway/gateway';

@Module({
  controllers: [UserWithdrawMethodController],
  providers: [UserWithdrawMethodService,LotayaLibService,Gateway],
  exports:[UserWithdrawMethodService]
})
export class UserWithdrawMethodModule {}
