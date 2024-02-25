import { ApiProperty } from "@nestjs/swagger";

export class FindAdminAccountResBodyDto{

    @ApiProperty()
    accountId: string;

    @ApiProperty()
    receiverType: string;

    @ApiProperty()
    receiverAccountName: string;

    @ApiProperty()
    receiverAccount: string;

}
