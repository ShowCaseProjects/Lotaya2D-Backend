import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { UseraccountModule } from 'src/useraccount/useraccount.module';
import { AdminAuthService } from './adminauth.service';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports:[UseraccountModule,AdminModule, JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '12000000s' },
  })],
  controllers: [AuthController],
  providers: [AuthService,AdminAuthService],
  exports:[AuthService,AdminAuthService]
})
export class AuthModule {}
