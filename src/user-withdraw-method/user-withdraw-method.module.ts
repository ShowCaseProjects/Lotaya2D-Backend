import { Module } from '@nestjs/common';
import { UserWithdrawMethodController } from './user-withdraw-method.controller';
import { UserWithdrawMethodService } from './user-withdraw-method.service';
import { UserWithdrawMethodController } from './user-withdraw-method.controller';

@Module({
  controllers: [UserWithdrawMethodController],
  providers: [UserWithdrawMethodService]
})
export class UserWithdrawMethodModule {}
