import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";


export class RegisterUserPhoneNumberConfirmReqPathDto {

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
    @ApiProperty({default:'09403951357'})
    phoneNumber: string;
}

export class RegisterUserOtpCodeConfirmReqPathDto {

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
    @ApiProperty({default:'09403951357'})
    phoneNumber: string;

}

export class RegisterUserPhoneNumberConfirmResBodyDto {

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    otpCode: string;
}