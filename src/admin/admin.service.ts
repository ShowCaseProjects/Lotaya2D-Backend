import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { LotayaLibService } from 'lotayalib';
import { LoginAdminUserReqBodyDto, LoginAdminUserResBodyDto } from './dto/login-adminuser-account.dto';

@Injectable()
export class AdminService {
    protected logger: Logger;

    constructor(private prisma: LotayaLibService) {
        this.logger = new Logger(this.constructor.name);
    }


    async findAdminUserById(
        loginAdminUserReqBodyDto: LoginAdminUserReqBodyDto
    ): Promise<LoginAdminUserResBodyDto> {
        try {
            const adminUserAccount = await this.prisma.admin.findUnique({
                where: {
                    admin_id: loginAdminUserReqBodyDto.accountId
                },
            });


            const userResponse: LoginAdminUserResBodyDto = {
                accountId: adminUserAccount?.admin_id,
                password: adminUserAccount?.password
            };
            return userResponse;
        }
        catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
