import {
  Body,
  Controller,
  HttpCode,
  Logger,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UseraccountService } from './useraccount.service';
import {
  RegisterUserPhoneNumberConfirmReqPathDto,
  RegisterUserPhoneNumberConfirmResBodyDto,
} from './dto/register-user-phonenumber-confirm.dto';
import {
  RegisterUserOtpCodeConfirmReqBodyDto,
  RegisterUserOtpCodeConfirmResBodyDto,
} from './dto/register-user-otpcodeconfirm.dto';
import {
  RegisterUserPasswordConfirmReqBodyDto,
  RegisterUserPasswordConfirmResBodyDto,
} from './dto/register-user-passwordconfirm.dto';
import {
  RegisterUserNameInsertReqBodyDto,
  RegisterUserNameInsertReqPathDto,
  RegisterUserNameInsertResBodyDto,
} from './dto/register-user-name.dto';
import { AuthGuards } from 'src/auth/auth.guard';

@ApiBearerAuth()
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
    description: 'To register with unauthentication',
  })
  @ApiOkResponse({
    description: 'To send Otp Code to be authenticated user.',
    type: RegisterUserPhoneNumberConfirmResBodyDto,
  })
  async registerWithPhoneNumber(
    @Param() registerReqPath: RegisterUserPhoneNumberConfirmReqPathDto,
  ): Promise<RegisterUserPhoneNumberConfirmResBodyDto> {
    return await this.userAccountService.registerUserAccountWithPhoneNumber(
      registerReqPath,
    );
  }

  @Post('register/otpCodeConfirm/:phoneNumber')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Otp Code Confirmation API',
    description: 'Confirmation Otp Code to authenticated user',
  })
  @ApiOkResponse({
    description: 'Confirm Otp Code to be authenticated user.',
    type: RegisterUserOtpCodeConfirmResBodyDto,
  })
  registerUserOtpCodeConfirm(
    @Param() confirmOtpCodeReqPath: RegisterUserPhoneNumberConfirmReqPathDto,
    @Body() confirmOtpCodeReqBody: RegisterUserOtpCodeConfirmReqBodyDto,
  ): Promise<RegisterUserOtpCodeConfirmResBodyDto> {
    return this.userAccountService.registerUserAccountOtpConfirm(
      confirmOtpCodeReqPath,
      confirmOtpCodeReqBody,
    );
  }

  @UseGuards(AuthGuards)
  @Post('register/password/:phoneNumber')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Password Confirmation API',
    description: 'Confirmation password to authenticated user',
  })
  @ApiOkResponse({
    description: 'Confirm password to be authenticated user.',
    type: RegisterUserOtpCodeConfirmResBodyDto,
  })
  registerUserPasswordConfirm(
    @Param() phoneNumber: RegisterUserPhoneNumberConfirmReqPathDto,
    @Body() confirmPasswordReqBody: RegisterUserPasswordConfirmReqBodyDto,
  ): Promise<RegisterUserPasswordConfirmResBodyDto> {
    return this.userAccountService.registerUserAccountPasswordConfirm(
      phoneNumber,
      confirmPasswordReqBody,
    );
  }

  @UseGuards(AuthGuards)
  @Post('register/username/:phoneNumber')
  @HttpCode(201)
  @ApiOperation({
    summary: 'User Name Adding API',
    description: 'Add Name to authenticated user',
  })
  @ApiOkResponse({
    description: 'Add Name to be authenticated user.',
    type: RegisterUserOtpCodeConfirmResBodyDto,
  })
  registerUserName(
    @Param() registerUserNameReqPath: RegisterUserNameInsertReqPathDto,
    @Body() registerUserNameReqBody: RegisterUserNameInsertReqBodyDto,
  ): Promise<RegisterUserNameInsertResBodyDto> {
    return this.userAccountService.registerUserAccountName(
      registerUserNameReqPath,
      registerUserNameReqBody,
    );
  }

  @UseGuards(AuthGuards)
  @Post('forgotPassword/:phoneNumber')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Forgot Password API',
    description: 'To forgot password with unauthentication',
  })
  @ApiOkResponse({
    description: 'To send Otp Code to be authenticated user.',
    type: RegisterUserPhoneNumberConfirmResBodyDto,
  })
  forgotPasswordWithPhoneNumber(
    @Param() registerReqPath: RegisterUserPhoneNumberConfirmReqPathDto,
  ): Promise<RegisterUserPhoneNumberConfirmResBodyDto> {
    return this.userAccountService.forgotPasswordUserAccountWithPhoneNumber(
      registerReqPath,
    );
  }

  @UseGuards(AuthGuards)
  @Post('forgotPassword/otpCodeConfirm/:phoneNumber')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Otp Code Confirmation API',
    description: 'Confirmation Otp Code to authenticated user',
  })
  @ApiOkResponse({
    description: 'Confirm Otp Code to be authenticated user.',
    type: RegisterUserOtpCodeConfirmResBodyDto,
  })
  forgotPasswordUserOtpCodeConfirm(
    @Param() confirmOtpCodeReqPath: RegisterUserPhoneNumberConfirmReqPathDto,
    @Body() confirmOtpCodeReqBody: RegisterUserOtpCodeConfirmReqBodyDto,
  ): Promise<RegisterUserOtpCodeConfirmResBodyDto> {
    return this.userAccountService.forgotPasswordUserAccountOtpConfirm(
      confirmOtpCodeReqPath,
      confirmOtpCodeReqBody,
    );
  }

  @Post('forgotPassword/password/:phoneNumber')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Password Confirmation API',
    description: 'Confirmation password to authenticated user',
  })
  @ApiOkResponse({
    description: 'Confirm password to be authenticated user.',
    type: RegisterUserOtpCodeConfirmResBodyDto,
  })
  forgotPasswordUserPasswordConfirm(
    @Param() phoneNumber: RegisterUserPhoneNumberConfirmReqPathDto,
    @Body() confirmPasswordReqBody: RegisterUserPasswordConfirmReqBodyDto,
  ): Promise<RegisterUserPasswordConfirmResBodyDto> {
    return this.userAccountService.forgotPasswordUserAccountPasswordConfirm(
      phoneNumber,
      confirmPasswordReqBody,
    );
  }
}
