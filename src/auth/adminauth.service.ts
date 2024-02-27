import {
  Injectable,
  Logger,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import {
  LoginAdminUserReqBodyDto,
  LoginAdminUserResBodyDto,
} from 'src/admin/dto/login-adminuser-account.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AdminAuthService {
  constructor(
    private adminUserService: AdminService,
    private jwtService: JwtService,
  ) {}
  private readonly logger = new Logger(AdminAuthService.name);

  async signInWithPassword(
    adminUserLoginReqBodyDto: LoginAdminUserReqBodyDto,
  ): Promise<LoginAdminUserResBodyDto> {
    const adminUser = await this.adminUserService.findAdminUserById(
      adminUserLoginReqBodyDto,
    );

    if (!adminUser) {
      throw new UnauthorizedException({
        errorCode: 'E1115',
        errorMessage: 'Does not exist user account..',
      });
    }
    const passwordValid = await bcrypt.compare(
      adminUserLoginReqBodyDto.password,
      adminUser.password,
    );

    if (!passwordValid) {
      throw new NotAcceptableException({
        errorCode: 'E1118',
        errorMessage: 'Invalid Password.',
      });
    }

    const payload = {
      accountId: adminUser.accountId,
      sub: adminUser.accountId,
    };
    return {
      accountId: adminUser.accountId,
      token: await this.jwtService.signAsync(payload),
    };
  }
}
