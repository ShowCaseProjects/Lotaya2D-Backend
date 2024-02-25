import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length, Matches} from "class-validator";


export class RegisterUserOtpCodeConfirmReqPathDto {

    @Length(6, 6,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your otp code using 6 digits.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your OTP Code.'
        }
    })
    @ApiProperty({default:'123456'})
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
    @Length(6, 6,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your otp code using 6 digits.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your otp code.'
        }
    })
    @ApiProperty({ default: '123456' })
    otpCode: string;
}

export class RegisterUserOtpCodeConfirmResBodyDto {
    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    token: string;

    @ApiProperty({ default: true })
    isSuccess: boolean;
}