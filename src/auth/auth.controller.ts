import {  Body, Controller, Get, HttpCode,  Logger, Param, Post, Req, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import {  LoginUserOtpCodeConfirmResBodyDto } from 'src/useraccount/dto/login-user-otpcodeconfitm.dto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LogoutResBodyDto } from 'src/useraccount/dto/logout-user.dto';
import { LoginUserPhoneNumberConfirmReqPathDto } from 'src/useraccount/dto/login-user-phonenumberconfirm.dto';
import { LoginUserPasswordConfirmReqBodyDto } from 'src/useraccount/dto/login-user-passwordconfirm.dto';
import { AuthGuards } from './auth.guard';
import { LoginAdminUserReqBodyDto, LoginAdminUserResBodyDto } from 'src/admin/dto/login-adminuser-account.dto';
import { AdminAuthService } from './adminauth.service';

@ApiBearerAuth()
@ApiTags('api/v1/auth')
@Controller('api/v1/auth')
export class AuthController {
    protected readonly logger: Logger;
    constructor(private authService: AuthService,private adminAuthService: AdminAuthService) {
        this.logger = new Logger(AuthController.name);
    }

    @Post('login/:phoneNumber/:password')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Authentication API',
        description: 'To login with authentication'
    })
    @ApiOkResponse({
        description: 'Login Success',
        type: LoginUserOtpCodeConfirmResBodyDto
    })
    signIn(@Param() phoneNumber:LoginUserPhoneNumberConfirmReqPathDto,@Param() password:LoginUserPasswordConfirmReqBodyDto): Promise<LoginUserOtpCodeConfirmResBodyDto> {
        return this.authService.signInWithPassword(phoneNumber,password);
    }
   
    @Post('admin/login')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Authentication API',
        description: 'To login with authentication'
    })
    @ApiOkResponse({
        description: 'Login Success',
        type: LoginAdminUserResBodyDto
    })
    adminUserSignIn(@Body() adminUserLoginReqBodyDto:LoginAdminUserReqBodyDto): Promise<LoginAdminUserResBodyDto> {
        return this.adminAuthService.signInWithPassword(adminUserLoginReqBodyDto);
    }

    @UseGuards(AuthGuards)
    @Get('logout')
    @HttpCode(200)
    @ApiOperation({
        summary: 'Logout API',
        description: 'To logout from account with authenticated.'
    })
    @ApiOkResponse({
        description: 'Logout Success',
        type: LogoutResBodyDto
    })
    logout(@Req() req): any {
        req.session.destroy();
        return { msg: 'The user session has ended' }
    }
}