import { Module } from '@nestjs/common';
import { PaymentmethodController } from './paymentmethod.controller';
import { PaymentmethodService } from './paymentmethod.service';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';

@Module({
  controllers: [PaymentmethodController],
  providers: [PaymentmethodService,LotayaLibService],
  exports:[PaymentmethodService]
})
export class PaymentmethodModule {}
