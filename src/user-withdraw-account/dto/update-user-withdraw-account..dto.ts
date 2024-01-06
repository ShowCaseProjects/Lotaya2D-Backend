import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UserWithdrawAccountUpdateReqPathDto {
    @IsString(
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
    withdrawAccountId: number;

}

export class UserWithdrawAccountUpdateReqBodyDto {
    @IsString(
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
    userId: number;


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

export class UserWithdrawAccountUpdateResBodyDto {
    @ApiProperty()
    isSuccess: boolean;
}
