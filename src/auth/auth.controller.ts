import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserOtpCodeConfirmReqBodyDto, LoginUserOtpCodeConfirmReqPathDto, LoginUserOtpCodeConfirmResBodyDto } from 'src/useraccount/dto/login-user-otpcodeconfitm.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LogoutResBodyDto } from 'src/useraccount/dto/logout-user.dto';

@ApiTags('api/v1/auth')
@Controller('api/v1/auth')
export class AuthController {
    protected readonly logger: Logger;
    constructor(private authService: AuthService) {
        this.logger = new Logger(AuthController.name);
    }

    @Post('login/:phoneNumber')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Authentication API',
        description: 'To login with authentication'
    })
    @ApiOkResponse({
        description: 'Login Success',
        type: LoginUserOtpCodeConfirmResBodyDto
    })
    signIn(@Param() signInPath: LoginUserOtpCodeConfirmReqPathDto, @Body() signInDto: LoginUserOtpCodeConfirmReqBodyDto): Promise<LoginUserOtpCodeConfirmResBodyDto> {
        return this.authService.signInWithOtpCode(signInPath, signInDto);
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