import { Global, Module } from '@nestjs/common';
import { LotayaLibService } from './lotayalib.service';

@Global()
@Module({
  controllers: [],
  providers: [LotayaLibService],
  exports: [LotayaLibService],
})
export class LotayaWalletlibModule {}
