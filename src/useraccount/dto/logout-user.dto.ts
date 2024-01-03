import { ApiProperty } from "@nestjs/swagger";

export class LogoutResBodyDto {
    @ApiProperty()
    isSuccess: boolean;
}