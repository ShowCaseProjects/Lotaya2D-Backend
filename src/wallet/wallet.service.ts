import { Injectable, Logger } from '@nestjs/common';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { Gateway } from 'src/gateway/gateway';

@Injectable()
export class WalletService {
    protected logger: Logger;

    constructor(private prisma: LotayaLibService, private walletGateWay: Gateway) {
        this.logger = new Logger(this.constructor.name);
    }

//     async addUserWallet(
//         addWalletReqPath: UserPaymentInsertReqPathDto, addPaymentReqBody: UserPaymentInsertReqBodyDto
//     ): Promise<UserPaymentInsertResBodyDto> {
//         try {
//             const registerData = await this.prisma.paymentMethod.create({
//                 data: {
//                     user_id: Number(addPaymentReqPath.userId),
//                     payment_type: addPaymentReqBody.paymentType,
//                     receiver_account_name: addPaymentReqBody.receiverAccountName,
//                     receiver_account: addPaymentReqBody.receiverAccount,
//                     amount: addPaymentReqBody.amount,
//                     delete_status: 0,
//                     date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
//                     payment_confirm_code: Number(addPaymentReqBody.paymentConfirmationCode),
//                     register_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
//                     updated_date: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
//                 },
//             });
//             const paymentdatadto = new UserPaymentFindResBodyDto();
//             paymentdatadto.paymentMethodId = registerData.payment_id,

//                 paymentdatadto.userId = registerData.user_id,

//                 paymentdatadto.receiverAccountName = registerData.receiver_account_name,

//                 paymentdatadto.receiverAccount = registerData.receiver_account,

//                 paymentdatadto.amount = registerData.amount.toFixed(5),

//                 paymentdatadto.paymentConfirmationCode = registerData.payment_confirm_code,

//                 paymentdatadto.registerDate = dayjs(registerData.register_date).format('YYYY-MM-DD HH:mm:ss'),

//                 paymentdatadto.updatedDate = dayjs(registerData.updated_date).format('YYYY-MM-DD HH:mm:ss')

//             this.paymentGateWay.notify('paymentmethod-added', paymentdatadto);

//             const responseData: UserPaymentInsertResBodyDto = {
//                 isSuccess: true,
//             }
//             return responseData;
//         }
// }
}
