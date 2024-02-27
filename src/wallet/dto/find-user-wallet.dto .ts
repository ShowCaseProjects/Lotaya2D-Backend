import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class FindUserWalletReqPathDto {
  @Matches(/^[0-9]+$/, {
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
  @ApiProperty({ default: '09403951357' })
  phoneNumber: string;
}

export class FindUserWalletReqBodyDto {
  @ApiProperty({ default: '09403951357' })
  phoneNumber: string;

  @ApiProperty({ default: '100000.4444' })
  mainAmount: string;

  @ApiProperty({ default: '100000.4444' })
  gainAmount: string;
}
