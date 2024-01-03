import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { LoginUserOtpCodeConfirmReqPathDto } from './dto/login-user-otpcodeconfitm.dto';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';
import { ValidateUserAuthenticationResBody } from './dto/validate-user-authentication.dto';
import { RegisterUserPhoneNumberConfirmReqPathDto, RegisterUserPhoneNumberConfirmResBodyDto } from './dto/register-user-phonenumber-confirm.dto';
import { TwilioService } from 'src/twilio/twilio.service';
import * as dayjs from 'dayjs'
import { RegisterUserOtpCodeConfirmReqBodyDto, RegisterUserOtpCodeConfirmReqPathDto, RegisterUserOtpCodeConfirmResBodyDto } from './dto/register-user-otpcodeconfirm.dto';

@Injectable()
export class UseraccountService {
    protected logger: Logger;

    constructor(private prisma: LotayaLibService, private readonly twilioService: TwilioService) {
        this.logger = new Logger(this.constructor.name);
    }

    async findUserByPhoneNumber(
        signInPath: LoginUserOtpCodeConfirmReqPathDto
    ): Promise<ValidateUserAuthenticationResBody> {
        try {
            const userAccount = await this.prisma.users.findUnique({
                where: {
                    phone_number: signInPath.phoneNumber
                },
            });

            const userResponse: ValidateUserAuthenticationResBody = {
                phoneNumber: userAccount.phone_number,
                otpCode: Number(userAccount.otp_code),
                smsSendTime: userAccount.sms_send_time
            };
            return userResponse;
        }
        catch (error) {
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async registerUserAccountWithPhoneNumber(
        registerReqPath: RegisterUserPhoneNumberConfirmReqPathDto
    ): Promise<RegisterUserPhoneNumberConfirmResBodyDto> {
        try {
            const registerData = await this.prisma.users.create({
                data: {
                    phone_number: registerReqPath.phoneNumber,
                    role_id: 2,
                    account_status: '0',
                    is_verify: '0',
                    sms_send_time: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    otp_code: this.generateOTP(6).trim()
                },
            });
            if (registerData) {
                await this.twilioService.sendOtpCode('+959403851357', this.generateOTP(6).trim());
            }
            const responseData: RegisterUserPhoneNumberConfirmResBodyDto = {
                phoneNumber: registerData.phone_number,
                otpCode: Number(registerData.otp_code)
            }
            return responseData;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new HttpException({
                    errorCode: 'E1101',
                    errorMessage: 'Your phone number have been registered.'
                }, HttpStatus.BAD_REQUEST);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    async registerUserAccountOtpConfirm(
        otpCodeConfirmReqPathDto: RegisterUserOtpCodeConfirmReqPathDto,
        otpCodeConfirmReqBodyDto: RegisterUserOtpCodeConfirmReqBodyDto
    ): Promise<RegisterUserOtpCodeConfirmResBodyDto> {
        try {
            const userAccount = await this.prisma.users.findUnique({
                where: {
                    phone_number: otpCodeConfirmReqPathDto.phoneNumber,
                    otp_code: String(otpCodeConfirmReqBodyDto.otpCode)
                },
            });
            const currentTime = new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')) as any;
            const twoMinutesAgo = new Date(dayjs(userAccount.sms_send_time).format('YYYY-MM-DD HH:mm:ss')) as any;
            const diffTime = (currentTime - twoMinutesAgo) / (60 * 1000);
            this.logger.log(diffTime)
            if (userAccount.otp_code === otpCodeConfirmReqBodyDto.otpCode.toString() && Number(diffTime) <= 2) {
                const confirmOtpCode = await this.prisma.users.update({
                    where: {
                        phone_number: otpCodeConfirmReqPathDto.phoneNumber
                    },
                    data: {
                        is_verify: '1'
                    }
                })
                const responseData: RegisterUserOtpCodeConfirmResBodyDto = {
                    phoneNumber: confirmOtpCode.phone_number,
                    isSuccess: true
                };
                return responseData;
            }
            else {
                if (userAccount.otp_code !== otpCodeConfirmReqBodyDto.otpCode.toString()) {
                    throw new HttpException({
                        errorCode: 'E1113',
                        errorMessage: 'Invalid Otp Code'
                    }, HttpStatus.NOT_FOUND);
                }
                else if (Number(diffTime) <= 2) {
                    throw new HttpException({
                        errorCode: 'E1114',
                        errorMessage: 'Your Otp Code is expired.'
                    }, HttpStatus.BAD_REQUEST);
                }
            }
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new HttpException({
                    errorCode: 'E1111',
                    errorMessage: 'Your accounnt not found.'
                }, HttpStatus.NOT_FOUND);
            }
            this.logger.error(error.stack)
            throw new HttpException({
                errorCode: 'E1119',
                errorMessage: 'Internal server error.'
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    generateOTP(length): string {
        const charset = '0123456789';
        let otp = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            otp += charset[randomIndex];
        }

        return otp;
    }
}
