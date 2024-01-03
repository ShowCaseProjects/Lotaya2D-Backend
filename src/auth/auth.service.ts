import { Injectable, Logger, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserOtpCodeConfirmReqBodyDto, LoginUserOtpCodeConfirmReqPathDto, LoginUserOtpCodeConfirmResBodyDto } from 'src/useraccount/dto/login-user-otpcodeconfitm.dto';
import { UseraccountService } from 'src/useraccount/useraccount.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UseraccountService, private jwtService: JwtService) { }
    private readonly logger = new Logger(AuthService.name);

    async signInWithOtpCode(signInPath: LoginUserOtpCodeConfirmReqPathDto, signInDto: LoginUserOtpCodeConfirmReqBodyDto): Promise<LoginUserOtpCodeConfirmResBodyDto> {
        const user = await this.usersService.findUserByPhoneNumber(signInPath);
        const twoMinuteAgo = new Date( Date.now() - 2000 * 60 );
        if (user.smsSendTime ===twoMinuteAgo) {
            throw new UnauthorizedException({
                errorCode: 'E1115',
                errorMessage: 'Otp code is expired.'
            });
        }

        if (user.otpCode !== signInDto.otpCode) {
            throw new UnauthorizedException({
                errorCode: 'E1116',
                errorMessage: 'Invalid otp code.'
            });
        }

        // const payload = { otpCode: signInDto.otpCode, sub: signInPath.phoneNumber };
        // return {
        //     access_token: await this.jwtService.signAsync(payload),
        // };
        return {
          phoneNumber:user.phoneNumber,
          isSuccess:true
        };
    }

    // async validateUser(signInPath: LoginUserOtpCodeConfirmReqPathDto, otpcode: number): Promise<any> {
    //     const user = await this.usersService.findUserByPhoneNumber(signInPath);
    //     if (!user) {
    //         throw new NotAcceptableException({
    //             errorCode: 'E1118',
    //             errorMessage: 'Unacceptable exception.'
    //         });
    //     }
    //     if (user && (otpcode === user.otpCode)) {
    //         return {
    //             phoneNumber: signInPath.phoneNumber,
    //             optCode: otpcode
    //         };
    //     }
    //     return null;
    // }
}
