import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UserWithdrawAccountFindReqPathDto {

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

export class UserWithdrawAccountFindResBodyDto {

    @ApiProperty()
    accountType: string;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    accountName: string;
    
    @ApiProperty()
    accountId: number;

    @ApiProperty()
    registerDate: Date;

    @ApiProperty()
    updatedDate: Date;
}
