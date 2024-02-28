import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Gateway } from 'src/gateway/gateway';
import * as dayjs from 'dayjs';
import {
  UserWalletInsertReqBodyDto,
  UserWalletInsertReqPathDto,
  UserWalletInsertResBodyDto,
} from './dto/add-user-wallet.dto';
import { LotayaLibService } from 'lotayalib';
import { ulid } from 'ulid';
import {
  FindUserWalletReqBodyDto,
  FindUserWalletReqPathDto,
} from './dto/find-user-wallet.dto ';

@Injectable()
export class WalletService {
  protected logger: Logger;

  constructor(
    private prisma: LotayaLibService,
    private walletGateWay: Gateway,
  ) {
    this.logger = new Logger(this.constructor.name);
  }

  async addUserWallet(
    addWalletReqBody: UserWalletInsertReqBodyDto,
    sign: String,
  ): Promise<UserWalletInsertResBodyDto> {
    try {
      const getWalletData = await this.prisma.wallet.findMany({
        where: {
          user: {
            phone_number: addWalletReqBody.phoneNumber,
          },
        },
      });
      if (getWalletData) {
        const registerData = await this.prisma.wallet.create({
          data: {
            wallet_id: ulid(),
            user: {
              connect: {
                phone_number: addWalletReqBody.phoneNumber,
              },
            },
            main_amount: addWalletReqBody.mainAmount,
            game_amount: addWalletReqBody.gainAmount,
            delete_status: 0,
            register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
            updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
          },
        });
      } else {
        const updatedData = await this.prisma.wallet.update({
          data: {
            main_amount:
              addWalletReqBody.mainAmount + sign + getWalletData[0].main_amount,
            game_amount:
              addWalletReqBody.gainAmount + sign + getWalletData[0].game_amount,
            delete_status: 0,
            register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
            updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
          },
          where: {
            wallet_id: getWalletData[0].wallet_id,
          },
        });
      }

      const transationData = await this.prisma.transaction.create({
        data: {
          transaction_id: ulid(),
          user: {
            connect: {
              phone_number: addWalletReqBody.phoneNumber,
            },
          },
          amount: addWalletReqBody.mainAmount,
          transaction_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
          transaction_type: {
            connect: {
              transaction_type: addWalletReqBody.transationType,
            },
          },
          delete_status: 0,
          register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
          updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
        },
      });

      const responseData: UserWalletInsertResBodyDto = {
        isSuccess: true,
      };
      return responseData;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException(
          {
            errorCode: 'E1101',
            errorMessage: 'Your wallet have been added.',
          },
          HttpStatus.BAD_REQUEST,
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

  async findUserWallet(
    findWalletReqPath: FindUserWalletReqPathDto,
  ): Promise<FindUserWalletReqBodyDto> {
    try {
      const getWalletData = await this.prisma.wallet.findMany({
        select: {
          game_amount: true,
          main_amount: true,
          user: {
            select: { phone_number: true },
          },
        },
        where: {
          user: {
            phone_number: findWalletReqPath.phoneNumber,
          },
        },
      });

      const responseData: FindUserWalletReqBodyDto = {
        phoneNumber: getWalletData[0].user.phone_number,
        gainAmount: getWalletData[0].game_amount.toString(),
        mainAmount: getWalletData[0].main_amount.toString(),
      };
      return responseData;
    } catch (error) {
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
}
