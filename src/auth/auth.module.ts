import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { UseraccountModule } from 'src/useraccount/useraccount.module';
import { LotayaWalletlibModule } from 'src/lotayalib';

@Module({
  imports:[UseraccountModule, JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '120000s' },
  })],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService]
})
export class AuthModule {}
