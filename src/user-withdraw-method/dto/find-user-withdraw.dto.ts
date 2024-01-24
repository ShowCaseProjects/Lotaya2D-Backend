import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsISO8601, IsOptional, Length, Matches } from "class-validator";

export class UserWithdrawMethodFindReqQueryDto {

    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your withdraw id as number.'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    withdrawId: string;

    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your id as number.'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    userId?: string;

    @Matches(/^[/^[a-zA-Z0-9- _]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your withdraw type as alphanumeric character.'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    withdrawType?: string;

    @Matches(/^[/^[a-zA-Z0-9- _]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your receiver account name as alphanumeric character.'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    receiverAccountName?: string;

    @Matches(/^[a-zA-Z0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your receiver account as alphanumeric character.'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    receiverAccount?: string;


    @Matches(/^[0-9.]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your payment amount as number.'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    amount?: string;

    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your withdraw confirmation code as number.'
            },
        }
    )
    @Length(6, 6,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your withdraw confirmation code using 6 digits.'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    withdrawConfirmationCode?: string;

    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your withdraw confirmation status as number.'
            },
        }
    )
    @Length(1, 1,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your withdraw confirmation status using 1 digits.'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    isVerify?: string;

    @IsISO8601({ strict: true },
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Invalid Date Format'
            },
        }
    )
    @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Invalid Date Format'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    creationDateFrom?: string;

    @IsISO8601({ strict: true },
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Invalid Date Format'
            },
        }
    )
    @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Invalid Date Format'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    creationDateTo?: string;
   
    @IsISO8601({ strict: true },
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Invalid Date Format'
            },
        }
    )
    @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Invalid Date Format'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    updatedDateFrom?: string;

    @IsISO8601({ strict: true },
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Invalid Date Format'
            },
        }
    )
    @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Invalid Date Format'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    updatedDateTo?: string;
}

export class UserWithdrawMethodFindResBodyDto {

    @ApiProperty()
    withdrawMethodId: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    accountType: string;
   
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
