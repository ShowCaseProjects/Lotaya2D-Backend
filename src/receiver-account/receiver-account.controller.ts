import {
  Body,
  Controller,
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
import { ReceiverAccountService } from './receiver-account.service';
import {
  AdminAccountInsertReqBodyDto,
  AdminAccountInsertResBodyDto,
} from './dto/add-admin-receiveraccount.dto';
import {
  AdminReceiverAccountUpdateReqBodyDto,
  AdminReceiverAccountUpdateReqPathDto,
  AdminReceiverAccountUpdateResBodyDto,
} from './dto/update-admin-receiveraccount.dto';
import { FindAdminAccountResBodyDto } from './dto/find-admin-receiveraccount.dto';
import { AuthGuards } from 'src/auth/auth.guard';

@ApiBearerAuth()
@ApiTags('api/v1/admin_receiver_account')
@Controller('api/v1/admin_receiver_account')
export class ReceiverAccountController {
  protected readonly logger: Logger;
  constructor(private receiverAccount: ReceiverAccountService) {
    this.logger = new Logger(ReceiverAccountController.name);
  }

  // @UseGuards(AuthGuards)
  @Post('/add')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Admin Receiver Account API',
    description: 'Fill bill to play game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: AdminAccountInsertResBodyDto,
  })
  addAdminReceiverAccountMethod(
    @Body() accountReqBody: AdminAccountInsertReqBodyDto,
  ): Promise<AdminAccountInsertResBodyDto> {
    return this.receiverAccount.addAdminAccount(accountReqBody);
  }

  // @UseGuards(AuthGuards)
  @Post('/update/:accountId/liveaccount')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Admin Receiver Account API',
    description: 'Fill bill to play game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: AdminAccountInsertResBodyDto,
  })
  updateAdminReceiverAccountMethod(
    @Param() accountReqPath: AdminReceiverAccountUpdateReqPathDto,
    @Body() accountReqBody: AdminReceiverAccountUpdateReqBodyDto,
  ): Promise<AdminReceiverAccountUpdateResBodyDto> {
    return this.receiverAccount.updateAdminAccount(
      accountReqBody,
      accountReqPath,
    );
  }

  @Post('/update/:accountId')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Admin Receiver Account API',
    description: 'Fill bill to play game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: AdminAccountInsertResBodyDto,
  })
  updateAdminReceiverLiveAccount(
    @Param() accountReqPath: AdminReceiverAccountUpdateReqPathDto,
  ): Promise<AdminReceiverAccountUpdateResBodyDto> {
    return this.receiverAccount.updateAdminLiveAccount(accountReqPath);
  }

  @UseGuards(AuthGuards)
  @Post('/get/receiveraccount')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Admin Receiver Account API',
    description: 'Fill bill to play game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: AdminAccountInsertResBodyDto,
  })
  findAdminReceiverAccountMethod(): Promise<FindAdminAccountResBodyDto> {
    return this.receiverAccount.findAdminAccount();
  }
}
