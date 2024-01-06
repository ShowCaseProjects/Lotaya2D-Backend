import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UserPaymentFindReqPathDto {

    @IsString(
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your phone number as number.'
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
    userId: string;

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

export class UserPaymentFindReqBodyDto {
    @IsString(
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your phone number as number.'
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
    userId: string;


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

export class UserPaymentFindResBodyDto {
   
    @ApiProperty()
    userId: string;

    @ApiProperty()
    receiverAccountName: string;
    
    @ApiProperty()
    receiverAccount: string;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    paymentConfirmationCode: number;
    
    @ApiProperty()
    registerDate: Date;

    @ApiProperty()
    updatedDate: Date;
}
