import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { UserPaymentInsertReqBodyDto, UserPaymentInsertReqPathDto, UserPaymentInsertResBodyDto } from './dto/add-user-payment.dto';
import * as dayjs from 'dayjs'
import { UserPaymentUpdateReqBodyDto, UserPaymentUpdateReqPathDto, UserPaymentUpdateResBodyDto } from './dto/update-user-payment.dto';
import { UserPaymentDeleteReqBodyDto, UserPaymentDeleteReqPathDto, UserPaymentDeleteResBodyDto } from './dto/delete-user-payment.dto';
import { UserPaymentFindReqQueryDto, UserPaymentFindResBodyDto } from './dto/find-user-payment.dto';
import { Gateway } from 'src/gateway/gateway';

@Injectable()
export class PaymentmethodService {

    protected logger: Logger;

    constructor(private prisma: LotayaLibService, private paymentGateWay: Gateway) {
        this.logger = new Logger(this.constructor.name);
    }

    async addUserPayment(
        addPaymentReqPath: UserPaymentInsertReqPathDto, addPaymentReqBody: UserPaymentInsertReqBodyDto
    ): Promise<UserPaymentInsertResBodyDto> {
        try {
            const registerData = await this.prisma.paymentMethod.create({
                data: {
                    user_id: Number(addPaymentReqPath.userId),
                    payment_type: addPaymentReqBody.paymentType,
                    receiver_account_name: addPaymentReqBody.receiverAccountName,
                    receiver_account: addPaymentReqBody.receiverAccount,
                    amount: addPaymentReqBody.amount,
                    delete_status: 0,
                    date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    payment_confirm_code: Number(addPaymentReqBody.paymentConfirmationCode),
                    register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
            const paymentdatadto = new UserPaymentFindResBodyDto();
            paymentdatadto.paymentMethodId = registerData.payment_id,

                paymentdatadto.userId = registerData.user_id,

                paymentdatadto.receiverAccountName = registerData.receiver_account_name,

                paymentdatadto.receiverAccount = registerData.receiver_account,

                paymentdatadto.amount = registerData.amount.toFixed(5),

                paymentdatadto.paymentConfirmationCode = registerData.payment_confirm_code,

                paymentdatadto.registerDate = dayjs(registerData.register_date).format('YYYY-MM-DD HH:mm:ss'),

                paymentdatadto.updatedDate = dayjs(registerData.updated_date).format('YYYY-MM-DD HH:mm:ss')

            this.paymentGateWay.notify('paymentmethod-added', paymentdatadto);

            const responseData: UserPaymentInsertResBodyDto = {
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

    async updateUserPayment(
        addPaymentReqPath: UserPaymentUpdateReqPathDto, addPaymentReqBody: UserPaymentUpdateReqBodyDto
    ): Promise<UserPaymentUpdateResBodyDto> {
        try {
            const updateData = await this.prisma.paymentMethod.update({
                where: {
                    payment_id: Number(addPaymentReqPath.paymentId),
                    user_id: Number(addPaymentReqBody.userId),
                },
                data: {
                    payment_type: addPaymentReqBody.paymentType,
                    receiver_account_name: addPaymentReqBody.receiverAccountName,
                    receiver_account: addPaymentReqBody.receiverAccount,
                    amount: addPaymentReqBody.amount,
                    payment_confirm_code: Number(addPaymentReqBody.paymentConfirmationCode),
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
            const responseData: UserPaymentUpdateResBodyDto = {
                isSuccess: true,
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
        addPaymentReqPath: UserPaymentDeleteReqPathDto, addPaymentReqBody: UserPaymentDeleteReqBodyDto
    ): Promise<UserPaymentDeleteResBodyDto> {
        try {

            const userAccount = await this.prisma.paymentMethod.findUnique({
                where: {
                    payment_id: Number(addPaymentReqPath.paymentId),
                    user_id: Number(addPaymentReqBody.userId),
                    payment_type: addPaymentReqBody.paymentType,
                    receiver_account_name: addPaymentReqBody.receiverAccountName,
                    receiver_account: addPaymentReqBody.receiverAccount,
                    amount: addPaymentReqBody.amount,
                    date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    payment_confirm_code: Number(addPaymentReqBody.paymentConfirmationCode),
                    register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });

            const updateData = await this.prisma.paymentMethod.update({
                where: {
                    payment_id: Number(addPaymentReqPath.paymentId),
                    user_id: Number(addPaymentReqBody.userId),
                },
                data: {
                    delete_status: 1,
                },
            });
            const responseData: UserPaymentUpdateResBodyDto = {
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

    async findAllPayment(
        findAllUserPayment: UserPaymentFindReqQueryDto
    ): Promise<UserPaymentFindResBodyDto[]> {
        try {
            const paymentdata = await this.prisma.paymentMethod.findMany({
                select: {
                    payment_id: true,
                    user_id: true,
                    payment_type: true,
                    payment_confirm_code: true,
                    receiver_account: true,
                    receiver_account_name: true,
                    amount: true,
                    register_date: true,
                    updated_date: true,
                },
                orderBy: [
                    { register_date: 'desc' },
                    { updated_date: 'desc' }
                ],
                where: {
                    payment_id: {
                        gte:
                            findAllUserPayment.paymentId == undefined
                                ? undefined
                                : Number(findAllUserPayment.paymentId),
                        lte:
                            findAllUserPayment.paymentId == undefined
                                ? undefined
                                : Number(findAllUserPayment.paymentId)
                    },
                    user_id: {
                        gte:
                            findAllUserPayment.userId == undefined
                                ? undefined
                                : Number(findAllUserPayment.userId),
                        lte:
                            findAllUserPayment.userId == undefined ?
                                undefined
                                : Number(findAllUserPayment.userId)
                    },
                    payment_type: { contains: findAllUserPayment.paymentType, mode: 'insensitive' },
                    payment_confirm_code: {
                        gte:
                            findAllUserPayment.paymentConfirmationCode == undefined
                                ? undefined
                                : Number(findAllUserPayment.paymentConfirmationCode),
                        lte:
                            findAllUserPayment.paymentConfirmationCode == undefined
                                ? undefined
                                : Number(findAllUserPayment.paymentConfirmationCode)
                    },
                    delete_status:0,
                    receiver_account: { contains: findAllUserPayment.receiverAccount, mode: 'insensitive' },
                    receiver_account_name: { contains: findAllUserPayment.receiverAccountName, mode: 'insensitive' },
                    amount: findAllUserPayment.amount,
                    register_date: {
                        gte:
                            findAllUserPayment.creationDateFrom == undefined
                                ? undefined
                                : `${findAllUserPayment.creationDateFrom}T00:00:00Z`,
                        lte:
                            findAllUserPayment.creationDateTo == undefined
                                ? undefined
                                : `${findAllUserPayment.creationDateTo}T00:00:00Z`
                    }
                }
            });
            return (
                paymentdata.map((a) => {
                    const paymentdatadto = new UserPaymentFindResBodyDto();
                    paymentdatadto.paymentMethodId = a.payment_id,

                        paymentdatadto.userId = a.user_id,

                        paymentdatadto.receiverAccountName = a.receiver_account_name,

                        paymentdatadto.receiverAccount = a.receiver_account,

                        paymentdatadto.amount = a.amount.toFixed(5),

                        paymentdatadto.paymentConfirmationCode = a.payment_confirm_code,

                        paymentdatadto.registerDate = dayjs(a.register_date).format('YYYY-MM-DD HH:mm:ss'),

                        paymentdatadto.updatedDate = dayjs(a.updated_date).format('YYYY-MM-DD HH:mm:ss')

                    return paymentdatadto;
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


    async findAllPayments(params: {
        skip?: number;
        take?: number;
    }): Promise<UserPaymentFindResBodyDto[]> {
        const { skip, take, } = params;
        try {
            const paymentdata = await this.prisma.paymentMethod.findMany({
                skip,
                take,
                orderBy: {
                    register_date: 'desc'
                }
            });
            return (
                paymentdata.map((a) => {
                    const paymentdatadto = new UserPaymentFindResBodyDto();
                    paymentdatadto.paymentMethodId = a.payment_id,

                        paymentdatadto.userId = a.user_id,

                        paymentdatadto.receiverAccountName = a.receiver_account_name,

                        paymentdatadto.receiverAccount = a.receiver_account,

                        paymentdatadto.amount = a.amount.toFixed(5),

                        paymentdatadto.paymentConfirmationCode = a.payment_confirm_code,

                        paymentdatadto.registerDate = dayjs(a.register_date).format('YYYY-MM-DD HH:mm:ss'),

                        paymentdatadto.updatedDate = dayjs(a.updated_date).format('YYYY-MM-DD HH:mm:ss')

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
