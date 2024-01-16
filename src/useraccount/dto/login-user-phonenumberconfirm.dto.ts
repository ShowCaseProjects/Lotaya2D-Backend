import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches } from "class-validator";


export class LoginUserPhoneNumberConfirmReqPathDto {

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

export class LoginUserPhoneNumberConfirmResBodyDto {

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    otpCode: number;
}