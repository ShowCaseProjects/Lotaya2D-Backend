import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { RoleId } from 'staticlib';

export class RegisterAdminReqDto {
  @IsString({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your name as character string.',
    },
  })
  @MaxLength(30, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your name using 30 digits or less.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your name.',
    },
  })
  @ApiProperty()
  userName: string;

  @IsString({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your phone number as number.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your phone number.',
    },
  })
  @ApiProperty()
  phoneNumber: string;

  @IsEnum(RoleId, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Unknown role type.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your role id.',
    },
  })
  @ApiProperty()
  roleId: number;
}

export class RegisterResAdminDto {
  @ApiProperty()
  otpCode: number;
}
