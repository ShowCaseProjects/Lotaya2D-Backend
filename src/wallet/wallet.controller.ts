import {
  Controller,
  Get,
  HttpCode,
  Logger,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { WalletService } from './wallet.service';
import {
  FindUserWalletReqBodyDto,
  FindUserWalletReqPathDto,
} from './dto/find-user-wallet.dto ';
import { AuthGuards } from 'src/auth/auth.guard';

@ApiBearerAuth()
@ApiTags('api/v1/wallet')
@Controller('api/v1/wallet')
export class WalletController {
  protected readonly logger: Logger;
  constructor(private walletService: WalletService) {
    this.logger = new Logger(WalletService.name);
  }

  @UseGuards(AuthGuards)
  @Get('get/balance/:phoneNumber')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Wallet API',
    description: 'To register with unauthentication',
  })
  @ApiOkResponse({
    description: 'To send Otp Code to be authenticated user.',
    type: FindUserWalletReqBodyDto,
  })
  async WalletWithPhoneNumber(
    @Param() walletReqPath: FindUserWalletReqPathDto,
  ): Promise<FindUserWalletReqBodyDto> {
    return await this.walletService.findUserWallet(walletReqPath);
  }
}
