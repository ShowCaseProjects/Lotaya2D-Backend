import {  Controller, Get, HttpCode,  Logger, Param, Post, Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import {  LoginUserOtpCodeConfirmResBodyDto } from 'src/useraccount/dto/login-user-otpcodeconfitm.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LogoutResBodyDto } from 'src/useraccount/dto/logout-user.dto';
import { LoginUserPhoneNumberConfirmReqPathDto } from 'src/useraccount/dto/login-user-phonenumberconfirm.dto';
import { LoginUserPasswordConfirmReqPathDto } from 'src/useraccount/dto/login-user-passwordconfirm.dto';

@ApiTags('api/v1/auth')
@Controller('api/v1/auth')
export class AuthController {
    protected readonly logger: Logger;
    constructor(private authService: AuthService) {
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
    signIn(@Param() phoneNumber:LoginUserPhoneNumberConfirmReqPathDto,@Param() password:LoginUserPasswordConfirmReqPathDto): Promise<LoginUserOtpCodeConfirmResBodyDto> {
        return this.authService.signInWithPassword(phoneNumber,password);
    }


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