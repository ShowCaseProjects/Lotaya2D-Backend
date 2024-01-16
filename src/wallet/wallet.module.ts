import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { Gateway } from 'src/gateway/gateway';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';

@Module({
  controllers: [WalletController],
  providers: [WalletService,LotayaLibService,Gateway],
  exports:[WalletService]
})
export class WalletModule {}
