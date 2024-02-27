import { Module } from '@nestjs/common';
import { PaymentmethodController } from './paymentmethod.controller';
import { PaymentmethodService } from './paymentmethod.service';
import { Gateway } from 'src/gateway/gateway';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { WalletService } from 'src/wallet/wallet.service';

@Module({
  controllers: [PaymentmethodController],
  providers: [PaymentmethodService, LotayaLibService, Gateway, WalletService],
  exports: [PaymentmethodService],
})
export class PaymentmethodModule {}
