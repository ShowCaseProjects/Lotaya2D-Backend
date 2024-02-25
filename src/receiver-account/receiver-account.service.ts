import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { LotayaLibService } from 'lotayalib';
import { AdminAccountInsertReqBodyDto, AdminAccountInsertResBodyDto } from './dto/add-admin-receiveraccount.dto';
import { ulid } from 'ulid';
import * as dayjs from 'dayjs'
import { FindAdminAccountResBodyDto } from './dto/find-admin-receiveraccount.dto';
import { AdminReceiverAccountUpdateReqBodyDto, AdminReceiverAccountUpdateReqPathDto, AdminReceiverAccountUpdateResBodyDto } from './dto/update-admin-receiveraccount.dto';

@Injectable()
export class ReceiverAccountService {
    protected logger: Logger;

    constructor(private prisma: LotayaLibService) {
        this.logger = new Logger(this.constructor.name);
    }

    async addAdminAccount(
       addAdminAccount:AdminAccountInsertReqBodyDto
    ): Promise<AdminAccountInsertResBodyDto> {
        try {
            const registerData = await this.prisma.adminReceiverAccount.create({
                data: {
                    admin_receiver_account_id:ulid(),
                    admin_account_type:addAdminAccount.receiverType,
                    admin_account_name:addAdminAccount.receiverAccountName,
                    admin_account_id:addAdminAccount.receiverAccount,
                    delete_status: 0,
                    register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
            const responseData: AdminAccountInsertResBodyDto = {
                isSuccess: true,
            }
            return responseData;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException({
                    errorCode: 'E1101',
                    errorMessage: 'Your account have been added.'
                }, HttpStatus.BAD_REQUEST);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    async updateAdminAccount(
        updateAdminAccount:AdminReceiverAccountUpdateReqBodyDto,updateAdminAccountreqPath:AdminReceiverAccountUpdateReqPathDto
     ): Promise<AdminReceiverAccountUpdateResBodyDto> {
         try {
            const updateData = await this.prisma.adminReceiverAccount.update({
                where: {
                   admin_receiver_account_id:updateAdminAccountreqPath.accountId
                },
                data: {
                    admin_account_id:updateAdminAccount.receiverAccount,
                    admin_account_name:updateAdminAccount.receiverAccountName,
                    admin_account_type:updateAdminAccount.receiverType,
                    updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
                },
            });
             const responseData: AdminReceiverAccountUpdateResBodyDto = {
                 isSuccess: true,
             }
             return responseData;
         }
         catch (error) {
             if (error.code === 'P2002') {
                 throw new HttpException({
                     errorCode: 'E1101',
                     errorMessage: 'Your account have been updated.'
                 }, HttpStatus.BAD_REQUEST);
             }
             this.logger.error(error.stack)
             throw new HttpException({
                 errorCode: 'E1119',
                 errorMessage: 'Internal server error.'
             }, HttpStatus.INTERNAL_SERVER_ERROR);
         }
 
     }
  
     async findAdminAccount(
      
    ): Promise<FindAdminAccountResBodyDto> {
        try {
            const adminAccount = await this.prisma.adminReceiverAccount.findMany(
                {

                }
            );

            const accountResponse: FindAdminAccountResBodyDto = {
                    accountId:adminAccount[0].admin_receiver_account_id,
                    receiverAccount:adminAccount[0].admin_account_id.toString(),
                    receiverAccountName:adminAccount[0].admin_account_name,
                    receiverType:adminAccount[0].admin_account_type
            };
            return accountResponse;
        }
        catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

