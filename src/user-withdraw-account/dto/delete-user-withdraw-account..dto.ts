import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from "class-validator";

export class UserWithdrawAccountDeleteReqPathDto {

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

export class UserWithdrawAccountDeleteReqBodyDto {
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

export class UserWithdrawAccountDeleteResBodyDto {
    @ApiProperty()
    isSuccess: boolean;
}
