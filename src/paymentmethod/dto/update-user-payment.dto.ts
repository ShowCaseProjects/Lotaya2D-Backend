import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UserPaymentUpdateReqPathDto {
    @IsString(
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment id as number.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment id.'
        }
    })
    @ApiProperty()
    paymentId: number;

}

export class UserPaymentUpdateReqBodyDto {
    @IsString(
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment number as number.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your id.'
        }
    })
    @ApiProperty()
    userId: number;


    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment type.'
        }
    })
    @ApiProperty()
    paymentType: string;

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment account name.'
        }
    })
    @ApiProperty()
    receiverAccountName: string;

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment account.'
        }
    })
    @ApiProperty()
    receiverAccount: string;

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment amount.'
        }
    })
    @IsString(
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment amount as number.'
            },
        }
    )
    @ApiProperty()
    amount: number;

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment confirmation code.'
        }
    })
    @IsString(
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment confirmation code.'
            },
        }
    )
    @ApiProperty()
    paymentConfirmationCode: number;
}

export class UserPaymentUpdateResBodyDto {
    @ApiProperty()
    isSuccess: boolean;
}
