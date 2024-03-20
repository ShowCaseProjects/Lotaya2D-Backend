import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import {
  UserPaymentInsertReqBodyDto,
  UserPaymentInsertResBodyDto,
} from './dto/add-user-payment.dto';
import * as dayjs from 'dayjs';
import * as tz from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(tz);
dayjs.extend(utc);
import {
  UserPaymentUpdateReqBodyDto,
  UserPaymentUpdateReqPathDto,
  UserPaymentUpdateResBodyDto,
} from './dto/update-user-payment.dto';
import {
  UserPaymentDeleteReqBodyDto,
  UserPaymentDeleteReqPathDto,
  UserPaymentDeleteResBodyDto,
} from './dto/delete-user-payment.dto';
import {
  UserPaymentFindReqDto,
  UserPaymentFindReqQueryDto,
  UserPaymentFindResBodyDto,
} from './dto/find-user-payment.dto';
import { Gateway } from 'src/gateway/gateway';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { WalletService } from 'src/wallet/wallet.service';
import { UserWalletInsertReqBodyDto } from 'src/wallet/dto/add-user-wallet.dto';
import { ulid } from 'ulid';
import {
  UserPaymentMethodApproveReqBodyDto,
  UserPaymentMethodApproveReqPathDto,
  UserPaymentMethodApproveResBodyDto,
} from './dto/approve-user-payment.dto';
import {
  UserPaymentMethodRejectReqBodyDto,
  UserPaymentMethodRejectReqPathDto,
  UserPaymentMethodRejectResBodyDto,
} from './dto/reject-user-payment.dto';

@Injectable()
export class PaymentmethodService {
  protected logger: Logger;

  constructor(
    private prisma: LotayaLibService,
    private paymentGateWay: Gateway,
    private walletService: WalletService,
  ) {
    this.logger = new Logger(this.constructor.name);
  }

  async addUserPayment(
    addPaymentReqBody: UserPaymentInsertReqBodyDto,
  ): Promise<UserPaymentInsertResBodyDto> {
    try {
      const registerData = await this.prisma.payment.create({
        data: {
          payment_internal_id: ulid(),
          user: {
            connect: {
              phone_number: addPaymentReqBody.phoneNumber,
            },
          },
          payment_type: addPaymentReqBody.paymentType,
          payment_account_name: addPaymentReqBody.paymentAccountName,
          payment_account: addPaymentReqBody.paymentAccountNumber,
          admin_receiver_account: {
            connect: {
              admin_receiver_account_id:
                addPaymentReqBody.adminReceiverAccountId,
              admin_account_id: addPaymentReqBody.receiverAccountNumber,
            },
          },
          amount: addPaymentReqBody.amount,
          delete_status: 0,
          approve_reject: 0,
          date: new Date(
            dayjs().tz('Asia/Yangon').format('YYYY-MM-DD HH:mm:ss'),
          ),
          payment_confirm_code: Number(
            addPaymentReqBody.paymentConfirmationCode,
          ),
          register_date: new Date(
            dayjs().tz('Asia/Yangon').format('YYYY-MM-DD HH:mm:ss'),
          ),
          updated_date: new Date(
            dayjs().tz('Asia/Yangon').format('YYYY-MM-DD HH:mm:ss'),
          ),
        },
        include: {
          admin_receiver_account: {
            select: {
              admin_account_id: true,
              admin_account_name: true,
              admin_account_type: true,
            },
          },
        },
      });
      const paymentdatadto = new UserPaymentFindResBodyDto();
      (paymentdatadto.paymentMethodId = registerData.payment_internal_id),
        (paymentdatadto.userId = registerData.user_internal_id),
        (paymentdatadto.receiverAccountName =
          registerData.admin_receiver_account.admin_account_name),
        (paymentdatadto.receiverAccount =
          registerData.admin_receiver_account.admin_account_id),
        (paymentdatadto.amount = registerData.amount.toFixed(5)),
        (paymentdatadto.paymentConfirmationCode =
          registerData.payment_confirm_code),
        (paymentdatadto.registerDate = dayjs(registerData.register_date).format(
          'YYYY-MM-DD HH:mm:ss',
        )),
        (paymentdatadto.updatedDate = dayjs(registerData.updated_date).format(
          'YYYY-MM-DD HH:mm:ss',
        ));

      this.paymentGateWay.notify('paymentmethod-added', paymentdatadto);

      const responseData: UserPaymentInsertResBodyDto = {
        isSuccess: true,
      };
      return responseData;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (error.code === 'P2002') {
        throw new HttpException(
          {
            errorCode: 'E1101',
            errorMessage: 'Your payment have been added.',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (error.code === 'P2025') {
        // if (error?.meta?.target[0] === 'user_internal_id') {
        throw new HttpException(
          {
            errorCode: 'E1111',
            errorMessage: 'Your accounnt not found.',
          },
          HttpStatus.NOT_FOUND,
        );
        // }
        // else if (error?.meta?.target[0] === 'admin_internal_id ') {
        // {
        //   throw new HttpException(
        //     {
        //       errorCode: 'E1111',
        //       errorMessage: 'Your accounnt not found.',
        //     },
        //     HttpStatus.NOT_FOUND,
        //   );
        // }
        // }
      }
      if (error.code === 'P2014') {
        if (error.meta.target[0] === 'user_internal_id') {
          throw new HttpException(
            {
              errorCode: 'E1117',
              errorMessage: 'Invalid ID',
            },
            HttpStatus.NOT_FOUND,
          );
        }
      }
      this.logger.error(error.stack);
      throw new HttpException(
        {
          errorCode: 'E1119',
          errorMessage: 'Internal server error.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateUserPayment(
    addPaymentReqPath: UserPaymentUpdateReqPathDto,
    addPaymentReqBody: UserPaymentUpdateReqBodyDto,
  ): Promise<UserPaymentUpdateResBodyDto> {
    try {
      const updateData = await this.prisma.payment.update({
        where: {
          payment_internal_id: addPaymentReqPath.paymentId,
          user_internal_id: addPaymentReqBody.userId,
        },
        data: {
          payment_type: addPaymentReqBody.paymentType,
          payment_account_name: addPaymentReqBody.paymentAccount,
          payment_account: addPaymentReqBody.paymentAccount,
          amount: addPaymentReqBody.amount,
          payment_confirm_code: Number(
            addPaymentReqBody.paymentConfirmationCode,
          ),
          updated_date: new Date(
            dayjs().tz('Asia/Yangon').format('YYYY-MM-DD HH:mm:ss'),
          ),
        },
      });

      const responseData: UserPaymentUpdateResBodyDto = {
        isSuccess: true,
      };
      return responseData;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (error.code === 'P2002') {
        throw new HttpException(
          {
            errorCode: 'E1101',
            errorMessage: 'Your payment have been updated.',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (error.code === 'P2025') {
        throw new HttpException(
          {
            errorCode: 'E1111',
            errorMessage: 'Your accounnt not found.',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      this.logger.error(error.stack);
      throw new HttpException(
        {
          errorCode: 'E1119',
          errorMessage: 'Internal server error.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteUserPayment(
    addPaymentReqPath: UserPaymentDeleteReqPathDto,
    addPaymentReqBody: UserPaymentDeleteReqBodyDto,
  ): Promise<UserPaymentDeleteResBodyDto> {
    try {
      const updateData = await this.prisma.payment.update({
        where: {
          payment_internal_id: addPaymentReqPath.paymentId,
          user_internal_id: addPaymentReqBody.userId,
        },
        data: {
          delete_status: 1,
        },
      });
      const responseData: UserPaymentUpdateResBodyDto = {
        isSuccess: true,
      };
      return responseData;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (error.code === 'P2002') {
        throw new HttpException(
          {
            errorCode: 'E1101',
            errorMessage: 'Your payment have been deleted.',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (error.code === 'P2025') {
        throw new HttpException(
          {
            errorCode: 'E1111',
            errorMessage: 'Your accounnt not found.',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      this.logger.error(error.stack);
      throw new HttpException(
        {
          errorCode: 'E1119',
          errorMessage: 'Internal server error.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAllPayment(
    findAllUserPayment: UserPaymentFindReqQueryDto,
  ): Promise<UserPaymentFindResBodyDto[]> {
    try {
      const paymentdata = await this.prisma.payment.findMany({
        select: {
          payment_internal_id: true,
          user_internal_id: true,
          payment_type: true,
          payment_account: true,
          payment_account_name: true,
          payment_confirm_code: true,
          admin_receiver_account: {
            select: {
              admin_account_id: true,
              admin_account_name: true,
              admin_account_type: true,
            },
          },
          amount: true,
          register_date: true,
          updated_date: true,
          user: {
            select: { phone_number: true },
          },
        },
        orderBy: [{ register_date: 'desc' }, { updated_date: 'desc' }],
        where: {
          payment_internal_id: {
            contains: findAllUserPayment.paymentId,
            mode: 'insensitive',
          },
          payment_type: {
            contains: findAllUserPayment.paymentType,
            mode: 'insensitive',
          },
          payment_account_name: {
            contains: findAllUserPayment.paymentAccountName,
            mode: 'insensitive',
          },
          payment_account: {
            contains: findAllUserPayment.paymentAccount,
            mode: 'insensitive',
          },
          payment_confirm_code: {
            gte:
              findAllUserPayment.paymentConfirmationCode == undefined
                ? undefined
                : Number(findAllUserPayment.paymentConfirmationCode),
            lte:
              findAllUserPayment.paymentConfirmationCode == undefined
                ? undefined
                : Number(findAllUserPayment.paymentConfirmationCode),
          },
          delete_status: 0,
          approve_reject:
            findAllUserPayment.paymentStatus == 'Approve'
              ? 1
              : findAllUserPayment.paymentStatus == 'Reject'
                ? 2
                : findAllUserPayment.paymentStatus == undefined
                  ? undefined
                  : 1,
          //   reciver_account_type: {
          //     contains: findAllUserPayment.recevierAccountType,
          //     mode: 'insensitive',
          //   },
          //   receiver_account: {
          //     contains: findAllUserPayment.receiverAccount,
          //     mode: 'insensitive',
          //   },
          //   receiver_account_name: {
          //     contains: findAllUserPayment.receiverAccountName,
          //     mode: 'insensitive',
          //   },
          amount: findAllUserPayment.amount,
          register_date: {
            gte:
              findAllUserPayment.creationDateFrom == undefined
                ? undefined
                : `${findAllUserPayment.creationDateFrom}T00:00:00Z`,
            lte:
              findAllUserPayment.creationDateTo == undefined
                ? undefined
                : `${findAllUserPayment.creationDateTo}T00:00:00Z`,
          },
          updated_date: {
            gte:
              findAllUserPayment.updatedDateFrom == undefined
                ? undefined
                : `${findAllUserPayment.updatedDateFrom}T00:00:00Z`,
            lte:
              findAllUserPayment.updatedDateTo == undefined
                ? undefined
                : `${findAllUserPayment.updatedDateTo}T00:00:00Z`,
          },
        },
      });
      return paymentdata.map((a) => {
        const paymentdatadto = new UserPaymentFindResBodyDto();
        (paymentdatadto.paymentMethodId = a.payment_internal_id),
          (paymentdatadto.userId = a.user.phone_number),
          (paymentdatadto.receiverAccountName =
            a.admin_receiver_account.admin_account_name),
          paymentdatadto.paymentType = a.payment_type,
          paymentdatadto.paymentAccount = a.payment_account,
          paymentdatadto.paymentAccountName = a.payment_account_name,
          (paymentdatadto.receiverAccount =
            a.admin_receiver_account.admin_account_id),
          (paymentdatadto.amount = a.amount.toFixed(5)),
          (paymentdatadto.paymentConfirmationCode = a.payment_confirm_code),
          (paymentdatadto.registerDate = dayjs(a.register_date).format(
            'YYYY-MM-DD HH:mm:ss',
          )),
          (paymentdatadto.updatedDate = dayjs(a.updated_date).format(
            'YYYY-MM-DD HH:mm:ss',
          ));

        return paymentdatadto;
      });
    } catch (err) {
      this.logger.log(err);
      if (err instanceof HttpException) {
        throw err;
      } else {
        throw new HttpException(
          {
            errorCode: 'E1119',
            errorMessage: 'Internal Server Error',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async findPayment(
    findUserPayment: UserPaymentFindReqDto,
  ): Promise<UserPaymentFindResBodyDto> {
    try {
      const paymentdata = await this.prisma.payment.findUnique({
        select: {
          payment_internal_id: true,
          user_internal_id: true,
          payment_type: true,
          payment_account: true,
          payment_account_name: true,
          payment_confirm_code: true,
          admin_receiver_account: {
            select: {
              admin_account_id: true,
              admin_account_name: true,
              admin_account_type: true,
            },
          },
          amount: true,
          register_date: true,
          updated_date: true,
          user: {
            select: { phone_number: true },
          },
        },
        where: {
          payment_internal_id?: findUserPayment.paymentId
        }
      });

      const paymentdatadto = new UserPaymentFindResBodyDto();
      (paymentdatadto.paymentMethodId = paymentdata.payment_internal_id),
        (paymentdatadto.userId = paymentdata.user.phone_number),
        (paymentdatadto.receiverAccountName =
          paymentdata.admin_receiver_account.admin_account_name),
        paymentdatadto.paymentType = paymentdata.payment_type,
        paymentdatadto.paymentAccount = paymentdata.payment_account,
        paymentdatadto.paymentAccountName = paymentdata.payment_account_name,
        (paymentdatadto.receiverAccount =
          paymentdata.admin_receiver_account.admin_account_id),
        (paymentdatadto.amount = paymentdata.amount.toFixed(5)),
        (paymentdatadto.paymentConfirmationCode = paymentdata.payment_confirm_code),
        (paymentdatadto.registerDate = dayjs(paymentdata.register_date).format(
          'YYYY-MM-DD HH:mm:ss',
        )),
        (paymentdatadto.updatedDate = dayjs(paymentdata.updated_date).format(
          'YYYY-MM-DD HH:mm:ss',
        ));

      return paymentdatadto;

    } catch (err) {
      this.logger.log(err);
      if (err instanceof HttpException) {
        throw err;
      } else {
        throw new HttpException(
          {
            errorCode: 'E1119',
            errorMessage: 'Internal Server Error',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async approveUserPaymentByAdmin(
    userpaymentApproveReqPathDto: UserPaymentMethodApproveReqPathDto,
    userpaymentApproveReqBodyDto: UserPaymentMethodApproveReqBodyDto,
  ): Promise<UserPaymentMethodApproveResBodyDto> {
    try {
      const updateData = await this.prisma.payment.update({
        where: {
          payment_internal_id: userpaymentApproveReqPathDto.paymentId,
        },
        data: {
          approve_reject: 1,
          admin: {
            connect: {
              admin_id: userpaymentApproveReqBodyDto.approverId,
            },
          },
          updated_date: new Date(
            dayjs().tz('Asia/Yangon').format('YYYY-MM-DD HH:mm:ss'),
          ),
        },
      });

      const userWalletInsertReqBodyDto = new UserWalletInsertReqBodyDto();

      userWalletInsertReqBodyDto.phoneNumber =
        userpaymentApproveReqBodyDto.phoneNumber;
      userWalletInsertReqBodyDto.gainAmount = '0';
      (userWalletInsertReqBodyDto.mainAmount =
        userpaymentApproveReqBodyDto.amount),
        (userWalletInsertReqBodyDto.transationType = 'Deposit');
      const walletData = this.walletService.addUserWallet(
        userWalletInsertReqBodyDto,
        '+',
      );
      return { isSuccess: true };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (error.code === 'P2014') {
        throw new HttpException(
          {
            errorCode: 'E1117',
            errorMessage: 'Approver ID not found',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      {
        throw new HttpException(
          {
            errorCode: 'E1119',
            errorMessage: 'Internal Server Error',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async rejectUserPaymentByAdmin(
    userpaymentRejectReqPathDto: UserPaymentMethodRejectReqPathDto,
    userpaymentRejectReqBodyDto: UserPaymentMethodRejectReqBodyDto,
  ): Promise<UserPaymentMethodRejectResBodyDto> {
    try {
      const updateData = await this.prisma.payment.update({
        where: {
          payment_internal_id: userpaymentRejectReqPathDto.paymentId,
        },
        data: {
          approve_reject: 2,
          admin: {
            connect: {
              admin_id: userpaymentRejectReqBodyDto.approverId,
            },
          },
          reason_for_reject: userpaymentRejectReqBodyDto.reasonForReject,
          updated_date: new Date(
            dayjs().tz('Asia/Yangon').format('YYYY-MM-DD HH:mm:ss'),
          ),
        },
      });
      return { isSuccess: true };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      if (error.code === 'P2014') {
        throw new HttpException(
          {
            errorCode: 'E1117',
            errorMessage: 'Approver ID not found',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      {
        throw new HttpException(
          {
            errorCode: 'E1119',
            errorMessage: 'Internal Server Error',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
