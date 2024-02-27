import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UseraccountModule } from './useraccount/useraccount.module';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { PaymentmethodModule } from './paymentmethod/paymentmethod.module';
import { UserWithdrawAccountModule } from './user-withdraw-account/user-withdraw-account.module';
import { UserWithdrawMethodModule } from './user-withdraw-method/user-withdraw-method.module';
import { LotayaWalletlibModule } from 'lotayalib';
import { AdminModule } from './admin/admin.module';
import { ReceiverAccountModule } from './receiver-account/receiver-account.module';

@Module({
  imports: [
    UseraccountModule,
    AuthModule,
    WalletModule,
    PaymentmethodModule,
    UserWithdrawAccountModule,
    UserWithdrawMethodModule,
    LotayaWalletlibModule,
    AdminModule,
    ReceiverAccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('');
  }
}
