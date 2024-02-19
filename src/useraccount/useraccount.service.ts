import { HttpException, HttpStatus, Injectable, Logger, NotAcceptableException } from '@nestjs/common';
import { ValidateUserAuthenticationResBody } from './dto/validate-user-authentication.dto';
import { RegisterUserPhoneNumberConfirmReqPathDto, RegisterUserPhoneNumberConfirmResBodyDto } from './dto/register-user-phonenumber-confirm.dto';
import * as dayjs from 'dayjs'
import { RegisterUserOtpCodeConfirmReqBodyDto, RegisterUserOtpCodeConfirmResBodyDto } from './dto/register-user-otpcodeconfirm.dto';
import { LoginUserPhoneNumberConfirmReqPathDto } from './dto/login-user-phonenumberconfirm.dto';
import { RegisterUserPasswordConfirmReqBodyDto, RegisterUserPasswordConfirmResBodyDto } from './dto/register-user-passwordconfirm.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginUserPasswordConfirmReqBodyDto } from './dto/login-user-passwordconfirm.dto';
import { RegisterUserNameInsertReqBodyDto, RegisterUserNameInsertReqPathDto, RegisterUserNameInsertResBodyDto } from './dto/register-user-name.dto';
import { LotayaLibService } from 'lotayalib/src/lotayalib.service';

@Injectable()
export class UseraccountService {
    protected logger: Logger;

    constructor(private prisma: LotayaLibService, private jwtService: JwtService) {
        this.logger = new Logger(this.constructor.name);
    }

    async findUserByPhoneNumber(
        phoneNumber: LoginUserPhoneNumberConfirmReqPathDto,
        password: LoginUserPasswordConfirmReqBodyDto
    ): Promise<ValidateUserAuthenticationResBody> {
        try {
            const userAccount = await this.prisma.users.findUnique({
                where: {
                    phone_number: phoneNumber.phoneNumber
                },
            });

            const passwordValid = await bcrypt.compare(password.password, userAccount.password);
            if (!passwordValid) {
                throw new NotAcceptableException({
                    errorCode: 'E1118',
                    errorMessage: 'Invalid User Id or Password.'
                });
            }
            const userResponse: ValidateUserAuthenticationResBody = {
                phoneNumber: userAccount.phone_number,
                otpCode: Number(userAccount.otp_code),
                smsSendTime: userAccount.sms_send_time
            };
            return userResponse;
        }
        catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
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
            const otpCode = this.generateOTP(6).trim();
            const userAccount = await this.prisma.users.findUnique({
                where: {
                    phone_number: registerReqPath.phoneNumber
                },
            });
            if (userAccount.account_status !== 1) {
                const registerData = await this.prisma.users.create({
                    data: {
                        phone_number: registerReqPath.phoneNumber,
                        role_id: 2,
                        account_status: 0,
                        is_verify: 0,
                        delete_status: 0,
                        sms_send_time: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                        otp_code: otpCode
                    },
                });
                if (registerData) {

                    const responseData: RegisterUserPhoneNumberConfirmResBodyDto = {
                        phoneNumber: registerData.phone_number,
                        otpCode: registerData.otp_code
                    }
                    return responseData;
                }
                else if (userAccount.account_status === 1) {
                    const confirmPassword = await this.prisma.users.update({
                        where: {
                            phone_number: registerReqPath.phoneNumber
                        },
                        data: {
                            sms_send_time: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                            otp_code: otpCode
                        }
                    });
                    if (confirmPassword) {

                        const responseData: RegisterUserPhoneNumberConfirmResBodyDto = {
                            phoneNumber: confirmPassword.phone_number,
                            otpCode: confirmPassword.otp_code
                        }
                        return responseData;
                    }
                }
            }
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
        otpCodeConfirmReqPathDto: RegisterUserPhoneNumberConfirmReqPathDto,
        otpCodeConfirmReqBodyDto: RegisterUserOtpCodeConfirmReqBodyDto
    ): Promise<RegisterUserOtpCodeConfirmResBodyDto> {
        try {
            const userAccount = await this.prisma.users.findUnique({
                where: {
                    phone_number: otpCodeConfirmReqPathDto.phoneNumber
                },
            });
            if (!userAccount) {
                throw new HttpException({
                    errorCode: 'E1111',
                    errorMessage: 'Your accounnt not found.'
                }, HttpStatus.NOT_FOUND);
            }
            const currentTime = new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')) as any;
            const twoMinutesAgo = new Date(dayjs(userAccount.sms_send_time).format('YYYY-MM-DD HH:mm:ss')) as any;
            const diffTime = (currentTime - twoMinutesAgo) / (60 * 1000);
            if (userAccount.otp_code === otpCodeConfirmReqBodyDto.otpCode.toString() && Number(diffTime) <= 2) {
                const confirmOtpCode = await this.prisma.users.update({
                    where: {
                        phone_number: otpCodeConfirmReqPathDto.phoneNumber
                    },
                    data: {
                        is_verify: 1
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
            if (error instanceof HttpException) {
                throw error;
            }
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

    async registerUserAccountPasswordConfirm(
        phoneNumber: RegisterUserPhoneNumberConfirmReqPathDto,
        passwordConfirmReqBodyDto: RegisterUserPasswordConfirmReqBodyDto
    ): Promise<RegisterUserPasswordConfirmResBodyDto> {
        try {

            if (passwordConfirmReqBodyDto.password !== passwordConfirmReqBodyDto.confirmPassword) {
                throw new HttpException({
                    errorCode: 'E1113',
                    errorMessage: 'Password and Confirm Password does not match!'
                }, HttpStatus.NOT_FOUND);
            }
            else {
                const salt = await bcrypt.genSalt();
                const hashpassword = await bcrypt.hash(passwordConfirmReqBodyDto.password, salt);
                const confirmPassword = await this.prisma.users.update({
                    where: {
                        phone_number: phoneNumber.phoneNumber
                    },
                    data: {
                        password: hashpassword,
                        account_status: 1
                    }
                });

                const payload = { phoneNumber: phoneNumber, sub: confirmPassword.otp_code };

                const responseData: RegisterUserPasswordConfirmResBodyDto = {
                    phoneNumber: confirmPassword.phone_number,
                    optCode: confirmPassword.otp_code,
                    token: await this.jwtService.signAsync(payload),
                    isSuccess: true
                };
                return responseData;
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

    async registerUserAccountName(
        registerUserNameReqPath: RegisterUserNameInsertReqPathDto,
        registerUserNameReqBody: RegisterUserNameInsertReqBodyDto
    ): Promise<RegisterUserNameInsertResBodyDto> {
        try {
            const addUserName = await this.prisma.users.update({
                where: {
                    phone_number: registerUserNameReqPath.phoneNumber
                },
                data: {
                    user_name: registerUserNameReqBody.userName
                }
            });

            const responseData: RegisterUserNameInsertResBodyDto = {
                phoneNumber: addUserName.phone_number,
                userName: addUserName.user_name
            };
            return responseData;
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

    async forgotPasswordUserAccountWithPhoneNumber(
        forgotPasswordReqPath: RegisterUserPhoneNumberConfirmReqPathDto
    ): Promise<RegisterUserPhoneNumberConfirmResBodyDto> {
        try {
            const userAccount = await this.prisma.users.update({
                where: {
                    phone_number: forgotPasswordReqPath.phoneNumber,
                },
                data: {
                    is_verify: 0,
                    sms_send_time: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
                    otp_code: this.generateOTP(6).trim()
                }
            });
            const responseData: RegisterUserPhoneNumberConfirmResBodyDto = {
                phoneNumber: forgotPasswordReqPath.phoneNumber,
                otpCode: userAccount.otp_code
            }
            return responseData;
        }
        catch (error) {

            if (error.code === 'P2025') {
                throw new HttpException({
                    errorCode: 'E1111',
                    errorMessage: 'Your accounnt not found.'
                }, HttpStatus.NOT_FOUND);
            }

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

    async forgotPasswordUserAccountOtpConfirm(
        otpCodeConfirmReqPathDto: RegisterUserPhoneNumberConfirmReqPathDto,
        otpCodeConfirmReqBodyDto: RegisterUserOtpCodeConfirmReqBodyDto
    ): Promise<RegisterUserOtpCodeConfirmResBodyDto> {
        try {
            const userAccount = await this.prisma.users.findUnique({
                where: {
                    phone_number: otpCodeConfirmReqPathDto.phoneNumber
                },
            });
            const currentTime = new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')) as any;
            const twoMinutesAgo = new Date(dayjs(userAccount.sms_send_time).format('YYYY-MM-DD HH:mm:ss')) as any;
            const diffTime = (currentTime - twoMinutesAgo) / (60 * 1000);

            if (userAccount.otp_code === otpCodeConfirmReqBodyDto.otpCode.toString() && Number(diffTime) <= 2) {
                const confirmOtpCode = await this.prisma.users.update({
                    where: {
                        phone_number: otpCodeConfirmReqPathDto.phoneNumber
                    },
                    data: {
                        is_verify: 0
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

    async forgotPasswordUserAccountPasswordConfirm(
        phoneNumber: RegisterUserPhoneNumberConfirmReqPathDto,
        passwordConfirmReqBodyDto: RegisterUserPasswordConfirmReqBodyDto
    ): Promise<RegisterUserPasswordConfirmResBodyDto> {
        try {
            const userAccount = await this.prisma.users.findUnique({
                where: {
                    phone_number: phoneNumber.phoneNumber
                },
            });

            if (passwordConfirmReqBodyDto.password !== passwordConfirmReqBodyDto.confirmPassword) {
                throw new HttpException({
                    errorCode: 'E1113',
                    errorMessage: 'Password and Confirm Password does not match!'
                }, HttpStatus.NOT_FOUND);
            }
            else {
                const salt = await bcrypt.genSalt();
                const hashpassword = await bcrypt.hash(passwordConfirmReqBodyDto.password, salt);
                const confirmPassword = await this.prisma.users.update({
                    where: {
                        phone_number: phoneNumber.phoneNumber
                    },
                    data: {
                        password: hashpassword
                    }
                });

                const payload = { phoneNumber: phoneNumber, sub: userAccount.otp_code };

                const responseData: RegisterUserPasswordConfirmResBodyDto = {
                    phoneNumber: confirmPassword.phone_number,
                    optCode: confirmPassword.otp_code,
                    token: await this.jwtService.signAsync(payload),
                    isSuccess: true
                };
                return responseData;
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
