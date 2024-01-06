import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { UserWithdrawAccountInsertReqBodyDto, UserWithdrawAccountInsertReqPathDto, UserWithdrawAccountInsertResBodyDto } from './dto/add-user-withdraw-account.dto';
import * as dayjs from 'dayjs'
import { UserWithdrawAccountUpdateReqBodyDto, UserWithdrawAccountUpdateReqPathDto, UserWithdrawAccountUpdateResBodyDto } from './dto/update-user-withdraw-account..dto';
import { UserWithdrawAccountDeleteReqBodyDto, UserWithdrawAccountDeleteReqPathDto, UserWithdrawAccountDeleteResBodyDto } from './dto/delete-user-withdraw-account..dto';
import { UserWithdrawAccountFindResBodyDto } from './dto/find-user-withdraw-account..dto';

@Injectable()
export class UserWithdrawAccountService {
    protected logger: Logger;

    constructor(private prisma: LotayaLibService) {
        this.logger = new Logger(this.constructor.name);
    }

    async addUserWithdraw(
        addWithdrawAccountReqPath: UserWithdrawAccountInsertReqPathDto,addWithdrawAccountReqBody:UserWithdrawAccountInsertReqBodyDto
    ): Promise<UserWithdrawAccountInsertResBodyDto> {
        try {
            const registerData = await this.prisma.userWithdrawAccount.create({
                data: {
                        user_id:addWithdrawAccountReqPath.userId,
                        account_type:addWithdrawAccountReqBody.accountType,
                        account_name:addWithdrawAccountReqBody.accountName,
                        account_id:addWithdrawAccountReqBody.accountId,
                        delete_status:0,
                        register_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                        updated_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
            const responseData: UserWithdrawAccountInsertResBodyDto = {
                isSuccess:true,
            }
            return responseData;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException({
                    errorCode: 'E1101',
                    errorMessage: 'Your withdraw account have been added.'
                }, HttpStatus.BAD_REQUEST);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    async updateUserWithdrawAccount(
        addWithdrawAccountReqPath: UserWithdrawAccountUpdateReqPathDto,addWithdrawAccountReqBody:UserWithdrawAccountUpdateReqBodyDto
    ): Promise<UserWithdrawAccountUpdateResBodyDto> {
        try {
            const updateData = await this.prisma.userWithdrawAccount.update({
                where:{
                    user_withdraw_account_id:addWithdrawAccountReqPath.withdrawAccountId,
                    user_id:addWithdrawAccountReqBody.userId,
                },
                data: {
                    account_type:addWithdrawAccountReqBody.accountType,
                    account_name:addWithdrawAccountReqBody.accountName,
                    account_id:addWithdrawAccountReqBody.accountId,
                    updated_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
            const responseData: UserWithdrawAccountUpdateResBodyDto = {
                isSuccess:true,
            }
            return responseData;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException({
                    errorCode: 'E1101',
                    errorMessage: 'Your withdraw account have been updated.'
                }, HttpStatus.BAD_REQUEST);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    async deleteUserWithdrawAccount(
        addWithdrawAccountReqPath: UserWithdrawAccountDeleteReqPathDto,addWithdrawAccountReqBody:UserWithdrawAccountDeleteReqBodyDto
    ): Promise<UserWithdrawAccountDeleteResBodyDto> {
        try {

            const userAccount = await this.prisma.userWithdrawAccount.findUnique({
                where: {
                    user_withdraw_account_id:addWithdrawAccountReqPath.withdrawAccountId,
                    user_id:addWithdrawAccountReqBody.userId,
                    account_type:addWithdrawAccountReqBody.accountType,
                    account_name:addWithdrawAccountReqBody.accountName,
                    account_id:addWithdrawAccountReqBody.accountId,
                    delete_status:0,
                    register_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });

            const updateData = await this.prisma.userWithdrawAccount.update({
                where:{
                    user_withdraw_account_id:addWithdrawAccountReqPath.withdrawAccountId,
                    user_id:addWithdrawAccountReqBody.userId,
                },
                data: {
                    delete_status:1,
                },
            });
            const responseData: UserWithdrawAccountDeleteResBodyDto = {
                isSuccess:true,
            }
            return responseData;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException({
                    errorCode: 'E1101',
                    errorMessage: 'Your payment have been updated.'
                }, HttpStatus.BAD_REQUEST);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    async findAllWithdrawAccount(params: {
        skip?: number;
        take?: number;
        // cursor?: Prisma.PaymentMethod;
        // where?: Prisma.;
        // orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<UserWithdrawAccountFindResBodyDto[]> {
        const { skip, take,  } = params;
        try {
            const withdrawaccountdata = await this.prisma.userWithdrawAccount.findMany({
                skip,
                take,
            });
            return (
                withdrawaccountdata.map((a) => {
                    const withdrawaccountdatadto = new UserWithdrawAccountFindResBodyDto();
                    return withdrawaccountdatadto;
                }));
        }
        catch (err) {
            if (err instanceof HttpException) {
                throw err;
            } else {
                throw new HttpException({
                    errorCode: "E1119",
                    errorMessage: "Internal Server Error"
                },
                    HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

    }
}
