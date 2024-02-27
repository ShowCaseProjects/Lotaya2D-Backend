import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class UserWithdrawMethodRejectReqPathDto {
  @Matches(/^[0-9a-zA-Z]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your withdraw id as number.',
    },
  })
  @IsNotEmpty({
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your withdraw id.',
    },
  })
  @ApiProperty({ default: 1 })
  withdrawId: string;
}

export class UserWithdrawMethodRejectReqBodyDto {
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

export class UserWithdrawMethodRejectResBodyDto {
  @ApiProperty()
  isSuccess: boolean;
}
