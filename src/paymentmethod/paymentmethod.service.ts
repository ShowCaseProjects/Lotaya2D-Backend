import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { UserPaymentInsertReqBodyDto, UserPaymentInsertReqPathDto, UserPaymentInsertResBodyDto } from './dto/add-user-paymentdto';
import * as dayjs from 'dayjs'
import { UserPaymentUpdateReqBodyDto, UserPaymentUpdateReqPathDto, UserPaymentUpdateResBodyDto } from './dto/update-user-payment.dto';
import { UserPaymentDeleteReqBodyDto, UserPaymentDeleteReqPathDto } from './dto/delete-user-payment.dto';
import { Prisma } from '@prisma/client';
import { UserPaymentFindResBodyDto } from './dto/find-user-payment.dto';

@Injectable()
export class PaymentmethodService {
 
    protected logger: Logger;

    constructor(private prisma: LotayaLibService) {
        this.logger = new Logger(this.constructor.name);
    }

    async addUserPayment(
        addPaymentReqPath: UserPaymentInsertReqPathDto,addPaymentReqBody:UserPaymentInsertReqBodyDto
    ): Promise<UserPaymentInsertResBodyDto> {
        try {
            const registerData = await this.prisma.paymentMethod.create({
                data: {
                        user_id:addPaymentReqPath.userId,
                        payment_type:addPaymentReqBody.paymentType,
                        receiver_account_name:addPaymentReqBody.receiverAccountName,
                        receiver_account:addPaymentReqBody.receiverAccount,
                        amount:addPaymentReqBody.amount,
                        date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                        payment_confirm_code:addPaymentReqBody.paymentConfirmationCode,
                        register_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                        updated_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
            const responseData: UserPaymentInsertResBodyDto = {
                isSuccess:true,
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

    async updateUserPayment(
        addPaymentReqPath: UserPaymentUpdateReqPathDto,addPaymentReqBody:UserPaymentUpdateReqBodyDto
    ): Promise<UserPaymentUpdateResBodyDto> {
        try {
            const updateData = await this.prisma.paymentMethod.update({
                where:{
                    payment_id:addPaymentReqPath.paymentId,
                    user_id:addPaymentReqBody.userId,
                },
                data: {
                        payment_type:addPaymentReqBody.paymentType,
                        receiver_account_name:addPaymentReqBody.receiverAccountName,
                        receiver_account:addPaymentReqBody.receiverAccount,
                        amount:addPaymentReqBody.amount,
                        payment_confirm_code:addPaymentReqBody.paymentConfirmationCode,
                        updated_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
            const responseData: UserPaymentUpdateResBodyDto = {
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

    async deleteUserPayment(
        addPaymentReqPath: UserPaymentDeleteReqPathDto,addPaymentReqBody:UserPaymentDeleteReqBodyDto
    ): Promise<UserPaymentUpdateResBodyDto> {
        try {

            const userAccount = await this.prisma.paymentMethod.findUnique({
                where: {
                    payment_id:addPaymentReqPath.paymentId,
                    user_id:addPaymentReqBody.userId,
                    payment_type:addPaymentReqBody.paymentType,
                    receiver_account_name:addPaymentReqBody.receiverAccountName,
                    receiver_account:addPaymentReqBody.receiverAccount,
                    amount:addPaymentReqBody.amount,
                    date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    payment_confirm_code:addPaymentReqBody.paymentConfirmationCode,
                    register_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });

            const updateData = await this.prisma.paymentMethod.update({
                where:{
                    payment_id:addPaymentReqPath.paymentId,
                    user_id:addPaymentReqBody.userId,
                },
                data: {
                        payment_type:addPaymentReqBody.paymentType,
                        receiver_account_name:addPaymentReqBody.receiverAccountName,
                        receiver_account:addPaymentReqBody.receiverAccount,
                        amount:addPaymentReqBody.amount,
                        payment_confirm_code:addPaymentReqBody.paymentConfirmationCode,
                        updated_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
            const responseData: UserPaymentUpdateResBodyDto = {
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

    async findAllPayment(params: {
        skip?: number;
        take?: number;
        // cursor?: Prisma.PaymentMethod;
        // where?: Prisma.;
        // orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<UserPaymentFindResBodyDto[]> {
        const { skip, take,  } = params;
        try {
            const paymentdata = await this.prisma.paymentMethod.findMany({
                skip,
                take,
            });
            return (
                paymentdata.map((a) => {
                    const paymentdatadto = new UserPaymentFindResBodyDto();
                    return paymentdatadto;
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
