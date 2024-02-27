import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class UserPaymentMethodRejectReqPathDto {
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

export class UserPaymentMethodRejectReqBodyDto {
  @Matches(/^[0-9a-zA-Z]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your rejecter id.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter  your  rejecter id.',
    },
  })
  @ApiProperty({ default: 1 })
  approverId: string;

  @ApiProperty({ default: 1 })
  reasonForReject: string;
}

export class UserPaymentMethodRejectResBodyDto {
  @ApiProperty()
  isSuccess: boolean;
}
