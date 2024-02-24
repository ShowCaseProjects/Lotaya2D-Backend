import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Gateway } from 'src/gateway/gateway';
import * as dayjs from 'dayjs'
import { UserWalletInsertReqBodyDto, UserWalletInsertReqPathDto, UserWalletInsertResBodyDto } from './dto/add-user-wallet.dto';
import { LotayaLibService } from 'lotayalib';
import { ulid } from 'ulid';

@Injectable()
export class WalletService {
    protected logger: Logger;

    constructor(private prisma: LotayaLibService, private walletGateWay: Gateway) {
        this.logger = new Logger(this.constructor.name);
    }

    async addUserWallet(
        addWalletReqPath: UserWalletInsertReqPathDto, addWalletReqBody: UserWalletInsertReqBodyDto,sign:String
    ): Promise<UserWalletInsertResBodyDto> {
        try {
            const getWalletData=await this.prisma.wallet.findUnique({
             where:{
                user_id:addWalletReqBody.userId
             }
            });
            if(getWalletData)
            {
            const registerData = await this.prisma.wallet.create({
                data: {
                    wallet_id:ulid(),
                    user_id: addWalletReqPath.userId,
                    main_amount: addWalletReqBody.mainAmount,
                    game_amount: addWalletReqBody.gainAmount,
                    agent_id: Number(addWalletReqBody.agentId),
                    delete_status: 0,
                    register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
          }
          else
          {
            const updatedData = await this.prisma.wallet.update({
                data: {
                    main_amount: addWalletReqBody.mainAmount+sign+getWalletData.main_amount,
                    game_amount: addWalletReqBody.gainAmount+sign+getWalletData.game_amount,
                    agent_id: Number(addWalletReqBody.agentId),
                    delete_status: 0,
                    register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
                where:{
                   user_id:addWalletReqBody.userId
                }
            });
          }

            const transationData = await this.prisma.transaction.create({
                data: {
                    transaction_id:ulid(),
                    user_id: addWalletReqPath.userId,
                    amount: addWalletReqBody.mainAmount,
                    agent_id: Number(addWalletReqBody.agentId),
                    transaction_date:new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    transaction_type_id :addWalletReqBody.transationTypeId,
                    delete_status: 0,
                    
                    register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
        
            const responseData: UserWalletInsertResBodyDto = {
                isSuccess: true,
            }
            return responseData;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException({
                    errorCode: 'E1101',
                    errorMessage: 'Your wallet have been added.'
                }, HttpStatus.BAD_REQUEST);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

