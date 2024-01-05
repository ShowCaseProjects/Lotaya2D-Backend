import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class RegisterUserPasswordConfirmReqPathDto {

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
            errorMessage: 'Please enter your phone number.'
        }
    })
    @ApiProperty()
    phoneNumber: string;
}

export class RegisterUserPasswordConfirmReqBodyDto {

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

    @IsString(
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your confirm paasword as character string.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your confirm password.'
        }
    })
    @ApiProperty()
    confirmPassword: string;
}

export class RegisterUserPasswordConfirmResBodyDto {
    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    optCode: string;

    @ApiProperty()
    token: string;

    @ApiProperty()
    isSuccess: boolean;
}