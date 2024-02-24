import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches } from "class-validator";

export class UserWithdrawAccountDeleteReqPathDto {

    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your withdraw account id as number.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your withdraw account id.'
        }
    })
    @ApiProperty()
    withdrawAccountId: string;

}

export class UserWithdrawAccountDeleteReqBodyDto {
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
    @ApiProperty()
    userId: string;


    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your account type.'
        }
    })
    @ApiProperty()
    accountType: string;

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your account name.'
        }
    })
    @ApiProperty()
    accountName: string;

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your  account id.'
        }
    })

    @ApiProperty()
    accountId: number;
}

export class UserWithdrawAccountDeleteResBodyDto {
    @ApiProperty()
    isSuccess: boolean;
}
