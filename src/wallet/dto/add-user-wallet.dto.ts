import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class UserWalletInsertReqPathDto {
  @Matches(/^[0-9a-zA-Z]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your wallet id as number.',
    },
  })
  @ApiProperty({ default: '01Dfghjmoobgg' })
  walletId: string;
}

export class UserWalletInsertReqBodyDto {
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

  @Matches(/^[0-9a-zA-Z]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your wallet id as number.',
    },
  })
  @ApiProperty({ default: '01Dfghjmoobgg' })
  walletId: string;

  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your your amount.',
    },
  })
  @Matches(/^[0-9.]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your  amount as number.',
    },
  })
  @ApiProperty({ default: '100000.4444' })
  mainAmount: string;

  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your your amount.',
    },
  })
  @Matches(/^[0-9.]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your  amount as number.',
    },
  })
  @ApiProperty({ default: '100000.4444' })
  gainAmount: string;

  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your  transation type.',
    },
  })
  @ApiProperty()
  approverId: string;

  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your  transation type.',
    },
  })
  @ApiProperty()
  transationType: string;
}

export class UserWalletInsertResBodyDto {
  @ApiProperty()
  isSuccess: boolean;
}
