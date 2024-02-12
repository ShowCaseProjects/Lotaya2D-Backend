import { Module } from '@nestjs/common';
import { UserWithdrawAccountController } from './user-withdraw-account.controller';
import { UserWithdrawAccountService } from './user-withdraw-account.service';
import { LotayaLibService } from 'src/lotayalib';

@Module({
  controllers: [UserWithdrawAccountController],
  providers: [UserWithdrawAccountService,LotayaLibService],
  exports:[UserWithdrawAccountService]
})
export class UserWithdrawAccountModule {}
