import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { Gateway } from 'src/gateway/gateway';
import * as dayjs from 'dayjs'
import { UserWalletInsertReqBodyDto, UserWalletInsertReqPathDto, UserWalletInsertResBodyDto } from './dto/add-user-wallet.dto';

@Injectable()
export class WalletService {
    protected logger: Logger;

    constructor(private prisma: LotayaLibService, private walletGateWay: Gateway) {
        this.logger = new Logger(this.constructor.name);
    }

    async addUserWallet(
        addWalletReqPath: UserWalletInsertReqPathDto, addWalletReqBody: UserWalletInsertReqBodyDto
    ): Promise<UserWalletInsertResBodyDto> {
        try {
            const registerData = await this.prisma.wallet.create({
                data: {
                    user_id: Number(addWalletReqPath.userId),
                    main_amount: addWalletReqBody.mainAmount,
                    game_amount: addWalletReqBody.gainAmount,
                    agent_id: addWalletReqBody.agentId,
                    delete_status: 0,
                    register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });

            const transationData = await this.prisma.transaction.create({
                data: {
                    user_id: Number(addWalletReqPath.userId),
                    amount: addWalletReqBody.mainAmount,
                    agent_id: addWalletReqBody.agentId,
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

