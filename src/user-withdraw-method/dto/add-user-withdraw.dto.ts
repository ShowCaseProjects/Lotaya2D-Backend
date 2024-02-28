import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class UserWithdrawMethodInsertReqBodyDto {
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

  @Matches(/^[/^[a-zA-Z0-9- _]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage:
        'Please enter your withdraw account ID as alphanumeric character.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your withdraw account ID.',
    },
  })
  @ApiProperty({ default: 'bhyyhnvxh' })
  withdrawAccountId: string;

  @Matches(/^[a-zA-Z0-9]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage:
        'Please enter your receiver account as alphanumeric character.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your receiver account.',
    },
  })
  @ApiProperty({ default: '09403855555' })
  receiverAccountNumber: string;

  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment amount.',
    },
  })
  @Matches(/^[0-9.]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment amount as number.',
    },
  })
  @ApiProperty({ default: '100000.4444' })
  amount: string;
}

export class UserWithdrawMethodInsertResBodyDto {
  @ApiProperty()
  isSuccess: boolean;
}
