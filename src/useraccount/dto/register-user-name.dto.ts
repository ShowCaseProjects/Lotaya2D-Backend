import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class RegisterUserNameInsertReqPathDto {

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

export class RegisterUserNameInsertReqBodyDto {
    @IsString(
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your name as character string.'
            },
        }
    )
    @MaxLength(30, {
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your name using 30 digits or less.'
        },
    })
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your name.'
        }
    })
    @ApiProperty()
    userName: string;
}

export class RegisterUserNameInsertResBodyDto {
    @ApiProperty()
    phoneNumber: string;
    @ApiProperty()
    userName: string;
}