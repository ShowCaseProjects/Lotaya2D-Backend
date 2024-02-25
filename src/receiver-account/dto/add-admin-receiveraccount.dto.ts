import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsNumberString, Length, Matches } from "class-validator";

export class AdminAccountInsertReqBodyDto {
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your ID.'
        }
    })
    @ApiProperty({ default: 'Admin' })
    accountId: string;

    @Matches(/^[/^[a-zA-Z0-9- _]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your account type as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your account type.'
        }
    })
    @ApiProperty({ default: 'KBZ Account' })
    receiverType: string;

    @Matches(/^[/^[a-zA-Z0-9- _]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your  account name as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your  account name.'
        }
    })
    @ApiProperty({ default: 'Kyaw Kyaw' })
    receiverAccountName: string;

    @Matches(/^[a-zA-Z0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your  account as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your  account.'
        }
    })
    @ApiProperty({ default: '09970602931' })
    receiverAccount: string;

}

export class AdminAccountInsertResBodyDto{
    @ApiProperty()
    isSuccess: boolean;
}
