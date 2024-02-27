import { ApiProperty } from '@nestjs/swagger';

export class ValidateUserAuthenticationResBody {
  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  otpCode: number;

  @ApiProperty()
  smsSendTime: Date;
}
