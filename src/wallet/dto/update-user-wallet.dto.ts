import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,Matches} from "class-validator";

export class UserWalletUpdateReqPathDto {

    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your id as number.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your id.'
        }
    })
    @ApiProperty({ default: 1 })
    userId: number;

}

export class UserWalletUpdateReqBodyDto {
    @Matches(/^[0-9]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your id as number.'
            },
        }
    )
    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your id.'
        }
    })
    @ApiProperty({ default: 1 })
    userId: string;

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your your amount.'
        }
    })

    @Matches(/^[0-9.]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your  amount as number.'
            },
        }
    )
    @ApiProperty({ default: '100000.4444' })
    mainAmount: string;

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your your amount.'
        }
    })

    @Matches(/^[0-9.]+$/,
        {
            context: {
                errorCode: 'E1000',
                errorMessage: 'Please enter your  amount as number.'
            },
        }
    )
    @ApiProperty({ default: '100000.4444' })
    gainAmount: string;
   

    @IsNotEmpty({
        context: {
            errorCode: 'E1000',
            errorMessage: 'Please enter your  account id.'
        }
    })
    
    @ApiProperty()
    agentId: number;
}

export class UserWalletUpdateResBodyDto {
    @ApiProperty()
    isSuccess: boolean;
}
