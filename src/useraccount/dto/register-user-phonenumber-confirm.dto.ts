import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator";


export class RegisterUserPhoneNumberConfirmReqPathDto {

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
    phoneNumber: string;

}

export class RegisterUserPhoneNumberConfirmResBodyDto {

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty({default:true})
    otpCode: number;
}