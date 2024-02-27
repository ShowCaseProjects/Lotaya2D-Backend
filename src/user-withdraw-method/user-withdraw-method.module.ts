import { Module } from '@nestjs/common';
import { UserWithdrawMethodController } from './user-withdraw-method.controller';
import { UserWithdrawMethodService } from './user-withdraw-method.service';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { Gateway } from 'src/gateway/gateway';
import { WalletService } from 'src/wallet/wallet.service';

@Module({
  controllers: [UserWithdrawMethodController],
  providers: [
    UserWithdrawMethodService,
    LotayaLibService,
    Gateway,
    WalletService,
  ],
  exports: [UserWithdrawMethodService],
})
export class UserWithdrawMethodModule {}
