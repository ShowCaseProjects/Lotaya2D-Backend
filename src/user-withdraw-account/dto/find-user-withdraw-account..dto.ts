import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsISO8601, IsNotEmpty, IsOptional, IsString, Matches, MaxLength } from "class-validator";

export class UserWithdrawAccountFindReqPathDto {

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
    userId: string;

    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your withdraw account id as number.'
            },
        }
    )
    @IsOptional()
    @ApiPropertyOptional()
    withdrawAccountId: string;

    @IsOptional()
    @ApiPropertyOptional()
    accountType: string;

    @IsOptional()
    @ApiPropertyOptional()
    accountName: string;
   
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your  account id.'
        }
    })

    @IsOptional()
    @ApiPropertyOptional()
    accountId: number;

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

export class UserWithdrawAccountFindResBodyDto {
    
    @ApiProperty()
    withdrawAccountId:string;

    @ApiProperty()
    accountType: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    accountName: string;

    @ApiProperty()
    accountId: number;

    @ApiProperty()
    registerDate: string;

    @ApiProperty()
    updatedDate: string;
}
