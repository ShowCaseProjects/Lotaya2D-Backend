import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UseraccountModule } from './useraccount/useraccount.module';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { PaymentmethodModule } from './paymentmethod/paymentmethod.module';
import { UserWithdrawAccountModule } from './user-withdraw-account/user-withdraw-account.module';

@Module({
  imports: [UseraccountModule,AuthModule, WalletModule, PaymentmethodModule, UserWithdrawAccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer:MiddlewareConsumer)
  {
    consumer.apply().forRoutes('');
  }
}
