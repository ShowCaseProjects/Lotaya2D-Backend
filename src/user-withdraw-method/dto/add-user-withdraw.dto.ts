import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsNumberString, Length, Matches } from "class-validator";

export class UserWithdrawMethodInsertReqPathDto {

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

export class UserWithdrawMethodInsertReqBodyDto {
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
    withdrawType: string;

   
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
    
}

export class UserWithdrawMethodInsertResBodyDto {
    @ApiProperty()
    isSuccess: boolean;
}
