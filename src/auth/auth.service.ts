import { Injectable, Logger,  UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {  LoginUserOtpCodeConfirmResBodyDto } from 'src/useraccount/dto/login-user-otpcodeconfitm.dto';
import {  LoginUserPasswordConfirmReqPathDto, } from 'src/useraccount/dto/login-user-passwordconfirm.dto';
import { LoginUserPhoneNumberConfirmReqPathDto } from 'src/useraccount/dto/login-user-phonenumberconfirm.dto';
import { UseraccountService } from 'src/useraccount/useraccount.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UseraccountService, private jwtService: JwtService) { }
    private readonly logger = new Logger(AuthService.name);

    async signInWithPassword(phoneNumber:LoginUserPhoneNumberConfirmReqPathDto, password:LoginUserPasswordConfirmReqPathDto): Promise<LoginUserOtpCodeConfirmResBodyDto> {
        const user = await this.usersService.findUserByPhoneNumber(phoneNumber,password);

            if (!user) {
            throw new UnauthorizedException({
                errorCode: 'E1115',
                errorMessage: 'Does not exist user account..'
            });
          }

        // const twoMinuteAgo = new Date( Date.now() - 2000 * 60 );
        // if (user.smsSendTime ===twoMinuteAgo) {
        //     throw new UnauthorizedException({
        //         errorCode: 'E1115',
        //         errorMessage: 'Otp code is expired.'
        //     });
        // }

        // if (user.otpCode !== signInDto.otpCode) {
        //     throw new UnauthorizedException({
        //         errorCode: 'E1116',
        //         errorMessage: 'Invalid otp code.'
        //     });
        // }

        const payload = { phoneNumber: user.phoneNumber, sub: user.otpCode };
        return {
          phoneNumber:user.phoneNumber,
          isSuccess:true,
          token:await this.jwtService.signAsync(payload)
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
