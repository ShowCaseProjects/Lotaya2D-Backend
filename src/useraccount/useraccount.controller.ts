import { Body, Controller, HttpCode, Logger, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UseraccountService } from './useraccount.service';
import { RegisterUserPhoneNumberConfirmReqPathDto, RegisterUserPhoneNumberConfirmResBodyDto } from './dto/register-user-phonenumber-confirm.dto';
import { RegisterUserOtpCodeConfirmReqBodyDto, RegisterUserOtpCodeConfirmResBodyDto } from './dto/register-user-otpcodeconfirm.dto';

@ApiTags('api/v1/useraccount')
@Controller('api/v1/useraccount')
export class UseraccountController {
    protected readonly logger: Logger;
    constructor(private userAccountService: UseraccountService) {
        this.logger = new Logger(UseraccountController.name);
    }

    @Post('register/:phoneNumber')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Register API',
        description: 'To register with unauthentication'
    })
    @ApiOkResponse({
        description: 'To send Otp Code to be authenticated user.',
        type: RegisterUserPhoneNumberConfirmResBodyDto
    })
    registerWithPhoneNumber(@Param() registerReqPath: RegisterUserPhoneNumberConfirmReqPathDto): Promise<RegisterUserPhoneNumberConfirmResBodyDto> {
        return this.userAccountService.registerUserAccountWithPhoneNumber(registerReqPath);
    }

    @Post('register/confirm/otpcode/:phoneNumber')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Otp Code Confirmation API',
        description: 'Confirmation Otp Code to authenticated user'
    })
    @ApiOkResponse({
        description: 'Confirm Otp Code to be authenticated user.',
        type: RegisterUserOtpCodeConfirmResBodyDto
    })
    registerUserOtpCodeConfirm(@Param() confirmOtpCodeReqPath: RegisterUserPhoneNumberConfirmReqPathDto,@Body() confirmOtpCodeReqBody:RegisterUserOtpCodeConfirmReqBodyDto): Promise<RegisterUserOtpCodeConfirmResBodyDto> {
        return this.userAccountService.registerUserAccountOtpConfirm(confirmOtpCodeReqPath,confirmOtpCodeReqBody);
    }
}
