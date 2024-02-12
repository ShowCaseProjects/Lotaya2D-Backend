import { Module } from '@nestjs/common';
import { PaymentmethodController } from './paymentmethod.controller';
import { PaymentmethodService } from './paymentmethod.service';
import { Gateway } from 'src/gateway/gateway';
import { LotayaLibService } from 'src/lotayalib';

@Module({
  controllers: [PaymentmethodController],
  providers: [PaymentmethodService,LotayaLibService,Gateway],
  exports:[PaymentmethodService]
})
export class PaymentmethodModule {}
