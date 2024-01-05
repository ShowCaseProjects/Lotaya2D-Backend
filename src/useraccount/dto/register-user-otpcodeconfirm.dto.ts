import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";


export class RegisterUserOtpCodeConfirmReqPathDto {

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
    otpCode: string;

}

export class RegisterUserOtpCodeConfirmReqBodyDto {
    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your opt code as number.'
            },
        }
    )
    @MaxLength(6, {
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your otp code using 6 digits.'
        },
    })
    @MinLength(6, {
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your otp code using 6 digits.'
        },
    })
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your otp code.'
        }
    })
    @ApiProperty()
    otpCode: number;
}

export class RegisterUserOtpCodeConfirmResBodyDto {
    @ApiProperty()
    phoneNumber: string;

    @ApiProperty({default:true})
    isSuccess: boolean;
}