import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length, Matches, MaxLength } from "class-validator";

export class UserPaymentUpdateReqPathDto {
    @Matches(/^[0-9]+$/,
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
    @ApiProperty({ default: 1 })
    paymentId: string;

    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your id as number.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your id.'
        }
    })
    @ApiProperty({ default: 1 })
    userId: string;

}

export class UserPaymentUpdateReqBodyDto {
    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your id as number.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your id.'
        }
    })
    @ApiProperty({ default: 1 })
    userId: string;

    @Matches(/^[/^[a-zA-Z0-9- _]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment type as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment type.'
        }
    })
    @ApiProperty({ default: 'KBZ Account' })
    paymentType: string;

    @Matches(/^[/^[a-zA-Z0-9- _]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment account name as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment account name.'
        }
    })
    @ApiProperty({ default: 'Kyaw Kyaw' })
    paymentAccountName: string;

    @Matches(/^[a-zA-Z0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment account as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment account.'
        }
    })
    @ApiProperty({ default: '09970602931' })
    paymentAccount: string;

    @Matches(/^[/^[a-zA-Z0-9- _]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your receiver account type as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your receiver account type.'
        }
    })
    @ApiProperty({ default: 'KBZ Account' })
    recevierAccountType: string;

    @Matches(/^[/^[a-zA-Z0-9- _]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your receiver account name as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your receiver account name.'
        }
    })
    @ApiProperty({ default: 'Aung Aung' })
    receiverAccountName: string;

    @Matches(/^[a-zA-Z0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your receiver account as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your receiver account.'
        }
    })
    @ApiProperty({ default: '09403855555' })
    receiverAccount: string;

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment amount.'
        }
    })

    @Matches(/^[0-9.]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment amount as number.'
            },
        }
    )
    @ApiProperty({ default: '100000.4444' })
    amount: string;

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your payment confirmation code.'
        }
    })
    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment confirmation code as number.'
            },
        }
    )
    @Length(6, 6,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment confirmation code using 6 digits.'
            },
        }
    )
    @ApiProperty({ default: '123456' })
    paymentConfirmationCode: string;
}

export class UserPaymentUpdateResBodyDto {
    @ApiProperty()
    isSuccess: boolean;
}
