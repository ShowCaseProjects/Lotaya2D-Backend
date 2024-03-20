import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsISO8601, IsOptional, Length, Matches } from 'class-validator';

export class UserPaymentFindReqQueryDto {
  @Matches(/^[0-9a-zA-Z]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment id as number.',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  paymentId: string;

  @Matches(/^[0-9]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment id as number.',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  paymentStatus: string;

  @Matches(/^[/^[a-zA-Z0-9- _]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment type as alphanumeric character.',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  paymentType?: string;

  @Matches(/^[/^[a-zA-Z0-9- _]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage:
        'Please enter your payment account name as alphanumeric character.',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  paymentAccountName?: string;

  @Matches(/^[a-zA-Z0-9]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage:
        'Please enter your payment account as alphanumeric character.',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  paymentAccount?: string;

  @Matches(/^[/^[a-zA-Z0-9- _]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage:
        'Please enter your receiver account type as alphanumeric character.',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  recevierAccountType?: string;

  @Matches(/^[/^[a-zA-Z0-9- _]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage:
        'Please enter your receiver account name as alphanumeric character.',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  receiverAccountName?: string;

  @Matches(/^[a-zA-Z0-9]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage:
        'Please enter your receiver account as alphanumeric character.',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  receiverAccount?: string;

  @Matches(/^[0-9.]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment amount as number.',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  amount?: string;

  @Matches(/^[0-9]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment confirmation code as number.',
    },
  })
  @Length(6, 6, {
    context: {
      errorCode: 'E1000',
      errorMessage:
        'Please enter your payment confirmation code using 6 digits.',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  paymentConfirmationCode?: string;

  @IsISO8601(
    { strict: true },
    {
      context: {
        errorCode: 'E1000',
        errorMessage: 'Invalid Date Format',
      },
    },
  )
  @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Invalid Date Format',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  creationDateFrom?: string;

  @IsISO8601(
    { strict: true },
    {
      context: {
        errorCode: 'E1000',
        errorMessage: 'Invalid Date Format',
      },
    },
  )
  @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Invalid Date Format',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  creationDateTo?: string;

  @IsISO8601(
    { strict: true },
    {
      context: {
        errorCode: 'E1000',
        errorMessage: 'Invalid Date Format',
      },
    },
  )
  @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Invalid Date Format',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  updatedDateFrom?: string;

  @IsISO8601(
    { strict: true },
    {
      context: {
        errorCode: 'E1000',
        errorMessage: 'Invalid Date Format',
      },
    },
  )
  @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Invalid Date Format',
    },
  })
  @IsOptional()
  @ApiPropertyOptional()
  updatedDateTo?: string;
}

export class UserPaymentFindReqDto {
  @Matches(/^[0-9a-zA-Z]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment id as number.',
    },
  })
  @Matches(/^[0-9a-zA-Z]+$/, {
    context: {
      errorCode: 'E1000',
      errorMessage: 'Please enter your payment id as number.',
    },
  })
  @ApiProperty()
  paymentId: string;
}
export class UserPaymentFindResBodyDto {
  @ApiProperty()
  paymentMethodId: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  paymenttype: string;

  @ApiProperty()
  paymentAccountName: string;

  @ApiProperty()
  paymentAccount: string;

  @ApiProperty()
  receiverAccountName: string;

  @ApiProperty()
  receiverAccount: string;

  @ApiProperty()
  amount: string;

  @ApiProperty()
  paymentConfirmationCode: number;

  @ApiProperty()
  registerDate: string;

  @ApiProperty()
  updatedDate: string;
}
