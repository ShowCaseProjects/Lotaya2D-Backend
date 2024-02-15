import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Gateway } from 'src/gateway/gateway';
import { UserWithdrawMethodInsertReqBodyDto, UserWithdrawMethodInsertReqPathDto, UserWithdrawMethodInsertResBodyDto } from './dto/add-user-withdraw.dto';
import * as dayjs from 'dayjs'
import { UserWithdrawMethodFindReqQueryDto, UserWithdrawMethodFindResBodyDto } from './dto/find-user-withdraw.dto';
import { UserWithdrawMethodUpdateReqBodyDto, UserWithdrawMethodUpdateReqPathDto } from './dto/update-user-withdraw.dto';
import { UserWithdrawAccountUpdateResBodyDto } from 'src/user-withdraw-account/dto/update-user-withdraw-account..dto';
import { UserWithdrawMethodDeleteReqBodyDto, UserWithdrawMethodDeleteReqPathDto, UserWithdrawMethodDeleteResBodyDto } from './dto/delete-user-withdraw.dto';
import { LotayaLibService } from 'src/lotayalib';
import { RegisterUserPhoneNumberConfirmResBodyDto } from 'src/useraccount/dto/register-user-phonenumber-confirm.dto';
import { WalletService } from 'src/wallet/wallet.service';
import { UserWalletInsertReqBodyDto, UserWalletInsertReqPathDto } from 'src/wallet/dto/add-user-wallet.dto';

@Injectable()
export class UserWithdrawMethodService {
    protected logger: Logger;

    constructor(private prisma: LotayaLibService, private paymentGateWay: Gateway,private walletService:WalletService) {
        this.logger = new Logger(this.constructor.name);
    }

    async addUserWithdrawMethod(
        addWithdrawMethodReqPath: UserWithdrawMethodInsertReqPathDto, addWithdrawMethodReqBody:UserWithdrawMethodInsertReqBodyDto
    ): Promise<UserWithdrawMethodInsertResBodyDto> {
        try {
            const registerData = await this.prisma.withdrawMethod.create({
                data: {
                    user_id: Number(addWithdrawMethodReqPath.userId),
                    withdraw_type: addWithdrawMethodReqBody.withdrawType,
                    receiver_account_name: addWithdrawMethodReqBody.receiverAccountName,
                    receiver_account: addWithdrawMethodReqBody.receiverAccount,
                    amount: addWithdrawMethodReqBody.amount,
                    delete_status: 0,
                    date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    is_verify:0,
                    register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
           
            const userWalletInsertReqPathDto=new  UserWalletInsertReqPathDto();
            userWalletInsertReqPathDto.userId=registerData.user_id;
            const userWalletInsertReqBodyDto=new UserWalletInsertReqBodyDto();
            userWalletInsertReqBodyDto.gainAmount="0"
            userWalletInsertReqBodyDto.mainAmount=registerData.amount.toString(),
            userWalletInsertReqBodyDto.agentId=100,
            userWalletInsertReqBodyDto.transationTypeId=2
            const walletData=this.walletService.addUserWallet(userWalletInsertReqPathDto,userWalletInsertReqBodyDto,'-');
            const withdrawmethoddatadto = new UserWithdrawMethodFindResBodyDto();

                withdrawmethoddatadto.withdrawMethodId = registerData.withdraw_id,

                withdrawmethoddatadto.userId = registerData.user_id,

                withdrawmethoddatadto.accountType = registerData.withdraw_type,

                withdrawmethoddatadto.receiverAccount = registerData.receiver_account,

                withdrawmethoddatadto.amount = registerData.amount.toFixed(5),

                withdrawmethoddatadto.registerDate = dayjs(registerData.register_date).format('YYYY-MM-DD HH:mm:ss'),

                withdrawmethoddatadto.updatedDate = dayjs(registerData.updated_date).format('YYYY-MM-DD HH:mm:ss')

            this.paymentGateWay.notify('paymentmethod-added', withdrawmethoddatadto);

            const responseData: UserWithdrawMethodInsertResBodyDto = {
                isSuccess: true,
            }
            return responseData;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException({
                    errorCode: 'E1101',
                    errorMessage: 'Your payment have been added.'
                }, HttpStatus.BAD_REQUEST);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    async updateUserWithdrawMettod(
        addWithdrawMethodReqPath: UserWithdrawMethodUpdateReqPathDto, addWithdrawMethodReqBody: UserWithdrawMethodUpdateReqBodyDto
    ): Promise<UserWithdrawAccountUpdateResBodyDto> {
        try {
            const updateData = await this.prisma.withdrawMethod.update({
                where: {
                    withdraw_id: Number(addWithdrawMethodReqPath.withdrawId),
                    user_id: Number(addWithdrawMethodReqBody.userId),
                },
                data: {
                    withdraw_type: addWithdrawMethodReqBody.withdrawType,
                    receiver_account_name: addWithdrawMethodReqBody.receiverAccountName,
                    receiver_account: addWithdrawMethodReqBody.receiverAccount,
                    amount: addWithdrawMethodReqBody.amount,
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });

            const userWalletInsertReqPathDto=new  UserWalletInsertReqPathDto();
            userWalletInsertReqPathDto.userId=updateData.user_id;
            const userWalletInsertReqBodyDto=new UserWalletInsertReqBodyDto();
            userWalletInsertReqBodyDto.gainAmount="0"
            userWalletInsertReqBodyDto.mainAmount=updateData.amount.toString(),
            userWalletInsertReqBodyDto.agentId=100,
            userWalletInsertReqBodyDto.transationTypeId=2
            const walletData=this.walletService.addUserWallet(userWalletInsertReqPathDto,userWalletInsertReqBodyDto,'-');
            const responseData: UserWithdrawAccountUpdateResBodyDto = {
                isSuccess: true,
            }
            return responseData;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException({
                    errorCode: 'E1101',
                    errorMessage: 'Your withdraw method have been updated.'
                }, HttpStatus.BAD_REQUEST);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    async deleteUserWithdrawMethod(
        addWithdrawMethodReqPath: UserWithdrawMethodDeleteReqPathDto, addWithdrawMethodReqBody: UserWithdrawMethodDeleteReqBodyDto
    ): Promise<UserWithdrawMethodDeleteResBodyDto> {
        try {
            const updateData = await this.prisma.paymentMethod.update({
                where: {
                    payment_id: Number(addWithdrawMethodReqPath.withdrawId),
                    user_id: Number(addWithdrawMethodReqBody.userId),
                },
                data: {
                    delete_status: 1,
                },
            });
            const responseData: UserWithdrawMethodDeleteResBodyDto = {
                isSuccess: true,
            }
            return responseData;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException({
                    errorCode: 'E1101',
                    errorMessage: 'Your withdraw method have been deleted.'
                }, HttpStatus.BAD_REQUEST);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
  
    async findAllWithdrawMethod(
        findAllUserWithdrawMethod: UserWithdrawMethodFindReqQueryDto
    ): Promise<UserWithdrawMethodFindResBodyDto[]> {
        try {
            const withdrawdata = await this.prisma.withdrawMethod.findMany({
                select: {
                    withdraw_id: true,
                    user_id: true,
                    withdraw_type: true,
                    amount:true,
                    receiver_account_name: true,
                    receiver_account: true,
                    register_date: true,
                    updated_date: true,
                },
                orderBy: [
                    { register_date: 'desc' },
                    { updated_date: 'desc' }
                ],
                where: {
                    withdraw_id: {
                        gte:
                            findAllUserWithdrawMethod.withdrawId == undefined
                                ? undefined
                                : Number(findAllUserWithdrawMethod.withdrawId),
                        lte:
                            findAllUserWithdrawMethod.withdrawId == undefined
                                ? undefined
                                : Number(findAllUserWithdrawMethod.withdrawId)
                    },
                    user_id: {
                        gte:
                            findAllUserWithdrawMethod.userId == undefined
                                ? undefined
                                : Number(findAllUserWithdrawMethod.userId),
                        lte:
                            findAllUserWithdrawMethod.userId == undefined ?
                                undefined
                                : Number(findAllUserWithdrawMethod.userId)
                    },
                    withdraw_type: { contains: findAllUserWithdrawMethod.withdrawType, mode: 'insensitive' },
                    receiver_account_name: {
                        contains: findAllUserWithdrawMethod.receiverAccountName, mode: 'insensitive'
                    },
                    delete_status: 0,
                    receiver_account: { equals: findAllUserWithdrawMethod.receiverAccount },
                    register_date: {
                        gte:
                            findAllUserWithdrawMethod.creationDateFrom == undefined
                                ? undefined
                                : `${findAllUserWithdrawMethod.creationDateFrom}T00:00:00Z`,
                        lte:
                            findAllUserWithdrawMethod.creationDateTo == undefined
                                ? undefined
                                : `${findAllUserWithdrawMethod.creationDateTo}T00:00:00Z`
                    },
                    updated_date: {
                        gte:
                            findAllUserWithdrawMethod.updatedDateFrom == undefined
                                ? undefined
                                : `${findAllUserWithdrawMethod.updatedDateFrom}T00:00:00Z`,
                        lte:
                            findAllUserWithdrawMethod.updatedDateTo == undefined
                                ? undefined
                                : `${findAllUserWithdrawMethod.updatedDateTo}T00:00:00Z`
                    }
                }
            });
            return (
                withdrawdata.map((a) => {
        
                    const withdrawmethoddatadto = new UserWithdrawMethodFindResBodyDto();

                    withdrawmethoddatadto.withdrawMethodId = a.withdraw_id,
    
                    withdrawmethoddatadto.userId = a.user_id,
    
                    withdrawmethoddatadto.accountType = a.withdraw_type,
    
                    withdrawmethoddatadto.receiverAccount = a.receiver_account,
    
                    withdrawmethoddatadto.amount = a.amount.toFixed(5),
    
                    withdrawmethoddatadto.registerDate = dayjs(a.register_date).format('YYYY-MM-DD HH:mm:ss'),
    
                    withdrawmethoddatadto.updatedDate = dayjs(a.updated_date).format('YYYY-MM-DD HH:mm:ss')
    
                    return withdrawmethoddatadto;
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
   
    async confirmOtpCodeForWithdraw(
        otpCodeConfirmReqPathDto:  UserWithdrawMethodInsertReqPathDto
    ): Promise<RegisterUserPhoneNumberConfirmResBodyDto> {
        try {
    
            const userAccount = await this.prisma.users.update({
                where: {
                    user_id: Number(otpCodeConfirmReqPathDto.userId),
                },
                data: {
                    is_verify: 0,
                    sms_send_time: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    otp_code: this.generateOTP(6).trim()
                }
            });
            const responseData: RegisterUserPhoneNumberConfirmResBodyDto = {
                phoneNumber: userAccount.phone_number,
                otpCode:userAccount.otp_code
            }
            return responseData;
          
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new HttpException({
                    errorCode: 'E1111',
                    errorMessage: 'Your accounnt not found.'
                }, HttpStatus.NOT_FOUND);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    generateOTP(length): string {
        const charset = '0123456789';
        let otp = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            otp += charset[randomIndex];
        }

        return otp;
    }
}
