import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { LotayaLibService } from 'lotayalib';

@Module({
  controllers: [AdminController],
  providers: [AdminService, LotayaLibService],
  exports: [AdminService],
})
export class AdminModule {}
