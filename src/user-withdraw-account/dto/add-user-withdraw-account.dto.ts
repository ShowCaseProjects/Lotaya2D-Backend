import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Matches } from "class-validator";

export class UserWithdrawAccountInsertReqPathDto {

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
    userId: number;

}

export class UserWithdrawAccountInsertReqBodyDto {
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

export class UserWithdrawAccountInsertResBodyDto {
    @ApiProperty()
    isSuccess: boolean;
}
