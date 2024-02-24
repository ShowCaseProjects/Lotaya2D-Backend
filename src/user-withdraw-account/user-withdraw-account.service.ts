import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { UserWithdrawAccountInsertReqBodyDto, UserWithdrawAccountInsertReqPathDto, UserWithdrawAccountInsertResBodyDto } from './dto/add-user-withdraw-account.dto';
import * as dayjs from 'dayjs'
import { UserWithdrawAccountUpdateReqBodyDto, UserWithdrawAccountUpdateReqPathDto, UserWithdrawAccountUpdateResBodyDto } from './dto/update-user-withdraw-account..dto';
import { UserWithdrawAccountDeleteReqBodyDto, UserWithdrawAccountDeleteReqPathDto, UserWithdrawAccountDeleteResBodyDto } from './dto/delete-user-withdraw-account..dto';
import { UserWithdrawAccountFindReqPathDto, UserWithdrawAccountFindResBodyDto } from './dto/find-user-withdraw-account..dto';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { ulid } from 'ulid';

@Injectable()
export class UserWithdrawAccountService {
    protected logger: Logger;

    constructor(private prisma: LotayaLibService) {
        this.logger = new Logger(this.constructor.name);
    }

    async addUserWithdraw(
        addWithdrawAccountReqPath: UserWithdrawAccountInsertReqPathDto, addWithdrawAccountReqBody: UserWithdrawAccountInsertReqBodyDto
    ): Promise<UserWithdrawAccountInsertResBodyDto> {
        try {
            const registerData = await this.prisma.userWithdrawAccount.create({
                data: {
                    user_withdraw_account_id: ulid(),
                    user_id: addWithdrawAccountReqPath.userId,
                    account_type: addWithdrawAccountReqBody.accountType,
                    account_name: addWithdrawAccountReqBody.accountName,
                    account_id: addWithdrawAccountReqBody.accountId,
                    delete_status: 0,
                    register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
            const responseData: UserWithdrawAccountInsertResBodyDto = {
                isSuccess: true,
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
        addWithdrawAccountReqPath: UserWithdrawAccountUpdateReqPathDto, addWithdrawAccountReqBody: UserWithdrawAccountUpdateReqBodyDto
    ): Promise<UserWithdrawAccountUpdateResBodyDto> {
        try {
            const updateData = await this.prisma.userWithdrawAccount.update({
                where: {
                    user_withdraw_account_id: addWithdrawAccountReqPath.withdrawAccountId,
                    user_id: addWithdrawAccountReqBody.userId,
                },
                data: {
                    account_type: addWithdrawAccountReqBody.accountType,
                    account_name: addWithdrawAccountReqBody.accountName,
                    account_id: addWithdrawAccountReqBody.accountId,
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
            const responseData: UserWithdrawAccountUpdateResBodyDto = {
                isSuccess: true,
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
        addWithdrawAccountReqPath: UserWithdrawAccountDeleteReqPathDto, addWithdrawAccountReqBody: UserWithdrawAccountDeleteReqBodyDto
    ): Promise<UserWithdrawAccountDeleteResBodyDto> {
        try {

            const updateData = await this.prisma.userWithdrawAccount.update({
                where: {
                    user_withdraw_account_id: addWithdrawAccountReqPath.withdrawAccountId,
                    user_id: addWithdrawAccountReqBody.userId,
                },
                data: {
                    delete_status: 1,
                },
            });
            const responseData: UserWithdrawAccountDeleteResBodyDto = {
                isSuccess: true,
            }
            return responseData;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException({
                    errorCode: 'E1101',
                    errorMessage: 'Your payment have been deleted.'
                }, HttpStatus.BAD_REQUEST);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    async findAllWithdrawAccount(
        findAllUserWithdrawAccount: UserWithdrawAccountFindReqPathDto
    ): Promise<UserWithdrawAccountFindResBodyDto[]> {
        try {
            const paymentdata = await this.prisma.userWithdrawAccount.findMany({
                select: {
                    user_withdraw_account_id: true,
                    user_id: true,
                    account_type: true,
                    account_name: true,
                    account_id: true,
                    register_date: true,
                    updated_date: true,
                },
                orderBy: [
                    { register_date: 'desc' },
                    { updated_date: 'desc' }
                ],
                where: {
                    // user_withdraw_account_id: {
                    //     gte:
                    //         findAllUserWithdrawAccount.withdrawAccountId == undefined
                    //             ? undefined
                    //             : findAllUserWithdrawAccount.withdrawAccountId,
                    //     lte:
                    //         findAllUserWithdrawAccount.withdrawAccountId == undefined
                    //             ? undefined
                    //             : findAllUserWithdrawAccount.withdrawAccountId
                    // },
                    // user_id: {
                    //     gte:
                    //         findAllUserWithdrawAccount.userId == undefined
                    //             ? undefined
                    //             : Number(findAllUserWithdrawAccount.userId),
                    //     lte:
                    //         findAllUserWithdrawAccount.userId == undefined ?
                    //             undefined
                    //             : findAllUserWithdrawAccount.userId
                    // },
                    account_type: { contains: findAllUserWithdrawAccount.accountType, mode: 'insensitive' },
                    account_name: {
                        contains: findAllUserWithdrawAccount.accountName, mode: 'insensitive'
                    },
                    delete_status: 0,
                    account_id: { equals: findAllUserWithdrawAccount.accountId },
                    register_date: {
                        gte:
                            findAllUserWithdrawAccount.creationDateFrom == undefined
                                ? undefined
                                : `${findAllUserWithdrawAccount.creationDateFrom}T00:00:00Z`,
                        lte:
                            findAllUserWithdrawAccount.creationDateTo == undefined
                                ? undefined
                                : `${findAllUserWithdrawAccount.creationDateTo}T00:00:00Z`
                    },
                    updated_date: {
                        gte:
                            findAllUserWithdrawAccount.updatedDateFrom == undefined
                                ? undefined
                                : `${findAllUserWithdrawAccount.updatedDateFrom}T00:00:00Z`,
                        lte:
                            findAllUserWithdrawAccount.updatedDateTo == undefined
                                ? undefined
                                : `${findAllUserWithdrawAccount.updatedDateTo}T00:00:00Z`
                    }
                }
            });
            return (
                paymentdata.map((a) => {
                    const withdrawdatadto = new UserWithdrawAccountFindResBodyDto();

                        withdrawdatadto.withdrawAccountId = a.user_withdraw_account_id,
 
                        withdrawdatadto.userId = a.user_id,

                        withdrawdatadto.accountType = a.account_type,

                        withdrawdatadto.accountName = a.account_name,

                        withdrawdatadto.accountId = a.account_id,

                        withdrawdatadto.registerDate = dayjs(a.register_date).format('YYYY-MM-DD HH:mm:ss'),

                        withdrawdatadto.updatedDate = dayjs(a.updated_date).format('YYYY-MM-DD HH:mm:ss')

                    return withdrawdatadto;
                }));
        }
        catch (err) {
            this.logger.log(err)
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
