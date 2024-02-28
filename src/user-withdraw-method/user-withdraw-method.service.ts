import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Gateway } from 'src/gateway/gateway';
import {
  UserWithdrawMethodInsertReqBodyDto,
  UserWithdrawMethodInsertResBodyDto,
} from './dto/add-user-withdraw.dto';
import * as dayjs from 'dayjs';
import {
  UserWithdrawMethodFindReqQueryDto,
  UserWithdrawMethodFindResBodyDto,
} from './dto/find-user-withdraw.dto';
import {
  UserWithdrawMethodUpdateReqBodyDto,
  UserWithdrawMethodUpdateReqPathDto,
} from './dto/update-user-withdraw.dto';
import { UserWithdrawAccountUpdateResBodyDto } from 'src/user-withdraw-account/dto/update-user-withdraw-account..dto';
import {
  UserWithdrawMethodDeleteReqBodyDto,
  UserWithdrawMethodDeleteReqPathDto,
  UserWithdrawMethodDeleteResBodyDto,
} from './dto/delete-user-withdraw.dto';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { WalletService } from 'src/wallet/wallet.service';
import { UserWalletInsertReqBodyDto } from 'src/wallet/dto/add-user-wallet.dto';
import {
  UserWithdrawMethodApproveReqBodyDto,
  UserWithdrawMethodApproveReqPathDto,
  UserWithdrawMethodApproveResBodyDto,
} from './dto/approve-user-withdraw.dto';
import { ulid } from 'ulid';
import {
  UserWithdrawMethodRejectReqBodyDto,
  UserWithdrawMethodRejectReqPathDto,
  UserWithdrawMethodRejectResBodyDto,
} from './dto/reject-user-withdraw.dto';

@Injectable()
export class UserWithdrawMethodService {
  protected logger: Logger;

  constructor(
    private prisma: LotayaLibService,
    private paymentGateWay: Gateway,
    private walletService: WalletService,
  ) {
    this.logger = new Logger(this.constructor.name);
  }

  async addUserWithdrawMethod(
    addWithdrawMethodReqBody: UserWithdrawMethodInsertReqBodyDto,
  ): Promise<UserWithdrawMethodInsertResBodyDto> {
    try {
      const registerData = await this.prisma.withdrawMethod.create({
        data: {
          withdraw_id: ulid(),
          user: {
            connect: {
              phone_number: addWithdrawMethodReqBody.phoneNumber,
            },
          },
          withdrawaccount:{
            connect:{
              user_withdraw_account_id:addWithdrawMethodReqBody.withdrawAccountId,
              account_id:Number(addWithdrawMethodReqBody.receiverAccountNumber)
            }
          },
          amount: addWithdrawMethodReqBody.amount,
          delete_status: 0,
          approve_reject: 0,
          date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
          is_verify: 0,
          register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
          updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
        },
        include:{
          withdrawaccount:{
            select:{
              account_id:true,
              account_name:true,
              account_type:true
            }
          }
        }
      });

      const withdrawmethoddatadto = new UserWithdrawMethodFindResBodyDto();

      (withdrawmethoddatadto.withdrawMethodId = registerData.withdraw_id),
        (withdrawmethoddatadto.userId = registerData.user_internal_id),
        (withdrawmethoddatadto.accountType = registerData.withdrawaccount.account_type),
        (withdrawmethoddatadto.receiverAccount = registerData.withdrawaccount.account_id.toString()),
        (withdrawmethoddatadto.amount = registerData.amount.toFixed(5)),
        (withdrawmethoddatadto.registerDate = dayjs(
          registerData.register_date,
        ).format('YYYY-MM-DD HH:mm:ss')),
        (withdrawmethoddatadto.updatedDate = dayjs(
          registerData.updated_date,
        ).format('YYYY-MM-DD HH:mm:ss'));

      this.paymentGateWay.notify('paymentmethod-added', withdrawmethoddatadto);

      const responseData: UserWithdrawMethodInsertResBodyDto = {
        isSuccess: true,
      };
      return responseData;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException(
          {
            errorCode: 'E1101',
            errorMessage: 'Your payment have been added.',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (error.code === 'P2014') {
        throw new HttpException(
          {
            errorCode: 'E1117',
            errorMessage: 'Account ID not found',
          },
          HttpStatus.NOT_FOUND,
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

  async updateUserWithdrawMettod(
    addWithdrawMethodReqPath: UserWithdrawMethodUpdateReqPathDto,
    addWithdrawMethodReqBody: UserWithdrawMethodUpdateReqBodyDto,
  ): Promise<UserWithdrawAccountUpdateResBodyDto> {
    try {
      const updateData = await this.prisma.withdrawMethod.update({
        where: {
          withdraw_id: addWithdrawMethodReqPath.withdrawId,
          user_internal_id: addWithdrawMethodReqBody.userId,
        },
        data: {
          // withdraw_type: addWithdrawMethodReqBody.withdrawType,
          // receiver_account_name: addWithdrawMethodReqBody.receiverAccountName,
          // receiver_account: addWithdrawMethodReqBody.receiverAccount,
          amount: addWithdrawMethodReqBody.amount,
          updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
        },
      });
      const responseData: UserWithdrawAccountUpdateResBodyDto = {
        isSuccess: true,
      };
      return responseData;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException(
          {
            errorCode: 'E1101',
            errorMessage: 'Your withdraw method have been updated.',
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
      if (error.code === 'P2014') {
        throw new HttpException(
          {
            errorCode: 'E1117',
            errorMessage: 'Account ID not found',
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

  async approveUserWithdrawMethod(
    userWithdrawApproveReqPathDto: UserWithdrawMethodApproveReqPathDto,
    userWithdrawApproveReqBodyDto: UserWithdrawMethodApproveReqBodyDto,
  ): Promise<UserWithdrawMethodApproveResBodyDto> {
    try {
      const updateData = await this.prisma.withdrawMethod.update({
        where: {
          withdraw_id: userWithdrawApproveReqPathDto.withdrawId,
        },
        data: {
          approve_reject: 1,
          admin: {
            connect: {
              admin_id: userWithdrawApproveReqBodyDto.approverId,
            },
          },
          updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
        },
      });

      const userWalletInsertReqBodyDto = new UserWalletInsertReqBodyDto();
      userWalletInsertReqBodyDto.phoneNumber =
        userWithdrawApproveReqBodyDto.phoneNumber;
      userWalletInsertReqBodyDto.gainAmount = '0';
      (userWalletInsertReqBodyDto.mainAmount =
        userWithdrawApproveReqBodyDto.amount.toString()),
        (userWalletInsertReqBodyDto.approverId =
          userWithdrawApproveReqBodyDto.approverId),
        (userWalletInsertReqBodyDto.transationType = 'Withdraw');
      const walletData = this.walletService.addUserWallet(
        userWalletInsertReqBodyDto,
        '-',
      );
      return { isSuccess: true };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new HttpException(
          {
            errorCode: 'E1111',
            errorMessage: 'Your accounnt not found.',
          },
          HttpStatus.NOT_FOUND,
        );
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

  async rejectUserWithdrawMethod(
    userWithdrawRejectReqPathDto: UserWithdrawMethodRejectReqPathDto,
    userWithdrawRejectReqBodyDto: UserWithdrawMethodRejectReqBodyDto,
  ): Promise<UserWithdrawMethodRejectResBodyDto> {
    try {
      const updateData = await this.prisma.withdrawMethod.update({
        where: {
          withdraw_id: userWithdrawRejectReqPathDto.withdrawId,
        },
        data: {
          approve_reject: 2,
          admin: {
            connect: {
              admin_id: userWithdrawRejectReqBodyDto.approverId,
            },
          },
          reason_for_reject: userWithdrawRejectReqBodyDto.reasonForReject,
          updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
        },
      });
      return { isSuccess: true };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new HttpException(
          {
            errorCode: 'E1111',
            errorMessage: 'Your accounnt not found.',
          },
          HttpStatus.NOT_FOUND,
        );
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

  async deleteUserWithdrawMethod(
    addWithdrawMethodReqPath: UserWithdrawMethodDeleteReqPathDto,
    addWithdrawMethodReqBody: UserWithdrawMethodDeleteReqBodyDto,
  ): Promise<UserWithdrawMethodDeleteResBodyDto> {
    try {
      const updateData = await this.prisma.paymentMethod.update({
        where: {
          payment_internal_id: addWithdrawMethodReqPath.withdrawId,
          user_internal_id: addWithdrawMethodReqBody.userId,
        },
        data: {
          delete_status: 1,
        },
      });
      const responseData: UserWithdrawMethodDeleteResBodyDto = {
        isSuccess: true,
      };
      return responseData;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException(
          {
            errorCode: 'E1101',
            errorMessage: 'Your withdraw method have been deleted.',
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

  async findAllWithdrawMethod(
    findAllUserWithdrawMethod: UserWithdrawMethodFindReqQueryDto,
  ): Promise<UserWithdrawMethodFindResBodyDto[]> {
    try {
      const withdrawdata = await this.prisma.withdrawMethod.findMany({
        select: {
          withdraw_id: true,
          user_internal_id: true,
          amount: true,
          register_date: true,
          updated_date: true,
          withdrawaccount:{
            select:{
              account_id:true,
              account_name:true,
              account_type:true
            }
          }
        },
        orderBy: [{ register_date: 'desc' }, { updated_date: 'desc' }],
        where: {
          withdraw_id: {
            gte:
              findAllUserWithdrawMethod.withdrawId == undefined
                ? undefined
                : findAllUserWithdrawMethod.withdrawId,
            lte:
              findAllUserWithdrawMethod.withdrawId == undefined
                ? undefined
                : findAllUserWithdrawMethod.withdrawId,
          },
          user_internal_id: {
            gte:
              findAllUserWithdrawMethod.userId == undefined
                ? undefined
                : findAllUserWithdrawMethod.userId,
            lte:
              findAllUserWithdrawMethod.userId == undefined
                ? undefined
                : findAllUserWithdrawMethod.userId,
          },
          // withdraw_type: {
          //   contains: findAllUserWithdrawMethod.withdrawType,
          //   mode: 'insensitive',
          // },
          // receiver_account_name: {
          //   contains: findAllUserWithdrawMethod.receiverAccountName,
          //   mode: 'insensitive',
          // },
          delete_status: 0,
          // receiver_account: {
          //   equals: findAllUserWithdrawMethod.receiverAccount,
          // },
          register_date: {
            gte:
              findAllUserWithdrawMethod.creationDateFrom == undefined
                ? undefined
                : `${findAllUserWithdrawMethod.creationDateFrom}T00:00:00Z`,
            lte:
              findAllUserWithdrawMethod.creationDateTo == undefined
                ? undefined
                : `${findAllUserWithdrawMethod.creationDateTo}T00:00:00Z`,
          },
          updated_date: {
            gte:
              findAllUserWithdrawMethod.updatedDateFrom == undefined
                ? undefined
                : `${findAllUserWithdrawMethod.updatedDateFrom}T00:00:00Z`,
            lte:
              findAllUserWithdrawMethod.updatedDateTo == undefined
                ? undefined
                : `${findAllUserWithdrawMethod.updatedDateTo}T00:00:00Z`,
          },
        },
      });
      return withdrawdata.map((a) => {
        const withdrawmethoddatadto = new UserWithdrawMethodFindResBodyDto();

        (withdrawmethoddatadto.withdrawMethodId = a.withdraw_id),
          (withdrawmethoddatadto.userId = a.user_internal_id),
          (withdrawmethoddatadto.accountType = a.withdrawaccount.account_type),
          (withdrawmethoddatadto.receiverAccount = a.withdrawaccount.account_id.toString()),
          (withdrawmethoddatadto.amount = a.amount.toFixed(5)),
          (withdrawmethoddatadto.registerDate = dayjs(a.register_date).format(
            'YYYY-MM-DD HH:mm:ss',
          )),
          (withdrawmethoddatadto.updatedDate = dayjs(a.updated_date).format(
            'YYYY-MM-DD HH:mm:ss',
          ));

        return withdrawmethoddatadto;
      });
    } catch (err) {
      this.logger.log(err);
      if (err.code === 'P2025') {
        throw new HttpException(
          {
            errorCode: 'E1111',
            errorMessage: 'Your accounnt not found.',
          },
          HttpStatus.NOT_FOUND,
        );
      }
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
}
