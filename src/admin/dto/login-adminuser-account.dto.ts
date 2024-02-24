import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches } from "class-validator";

export class LoginAdminUserReqBodyDto {

    @Matches(/^[/^[a-zA-Z0-9- _]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your account id as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your account id.'
        }
    })
    @ApiProperty({ default: 'Admin1' })
    accountId: string;

    @Matches(/^[/^[a-zA-Z0-9- _@]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your password as alphanumeric character.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your password.'
        }
    })
    @ApiProperty({ default: 'Admin1' })
    password: string;
}


export class LoginAdminUserResBodyDto {
    @ApiProperty()
    accountId: string;
    
    @ApiProperty()
    password?: string;

    @ApiProperty()
    token?: string;
}