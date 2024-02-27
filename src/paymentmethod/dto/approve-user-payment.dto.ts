import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class UserPaymentMethodApproveReqPathDto {
  @Matches(/^[0-9a-zA-Z]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment id as number.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment id.',
    },
  })
  @ApiProperty({ default: 1 })
  paymentId: string;
}

export class UserPaymentMethodApproveReqBodyDto {
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
      errorMessage: 'Please enter your payment type as alphanumeric character.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment type.',
    },
  })
  @ApiProperty({ default: 'KBZ Account' })
  paymentType: string;

  @Matches(/^[/^[a-zA-Z0-9- _]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage:
        'Please enter your payment account name as alphanumeric character.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment account name.',
    },
  })
  @ApiProperty({ default: 'Aung Aung' })
  receiverAccountName: string;

  @Matches(/^[a-zA-Z0-9]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage:
        'Please enter your payment account as alphanumeric character.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment account.',
    },
  })
  @ApiProperty({ default: '09403855555' })
  receiverAccount: string;

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

  @Matches(/^[0-9a-zA-Z]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your approver id as alpha numeric character.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter  your approver id.',
    },
  })
  @ApiProperty({ default: 1 })
  approverId: string;
}

export class UserPaymentMethodApproveResBodyDto {
  @ApiProperty()
  isSuccess: boolean;
}
