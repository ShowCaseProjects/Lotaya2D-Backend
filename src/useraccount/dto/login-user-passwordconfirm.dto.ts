import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches } from "class-validator";

export class LoginUserPasswordConfirmReqPathDto {

    @Matches(/^[0-9]+$/,
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
            errorMessage: 'Please enter your phone number.'
        }
    })
    @ApiProperty({ default: '09403951357' })
    phoneNumber: string;
}

export class LoginUserPasswordConfirmReqBodyDto {

    @IsString(
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your paasword as character string.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your password.'
        }
    })
    @ApiProperty()
    password: string;
}

export class LoginUserPasswordConfirmResBodyDto {
    @ApiProperty()
    phoneNumber: string;

    @ApiProperty({ default: true })
    isSuccess: boolean;
    
}