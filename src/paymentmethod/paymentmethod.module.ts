import { Module } from '@nestjs/common';
import { PaymentmethodController } from './paymentmethod.controller';
import { PaymentmethodService } from './paymentmethod.service';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { Gateway } from 'src/gateway/gateway';

@Module({
  controllers: [PaymentmethodController],
  providers: [PaymentmethodService,LotayaLibService,Gateway],
  exports:[PaymentmethodService]
})
export class PaymentmethodModule {}
