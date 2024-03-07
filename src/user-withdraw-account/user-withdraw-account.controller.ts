import {
  Body,
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
import { UserWithdrawAccountService } from './user-withdraw-account.service';
import { AuthGuards } from 'src/auth/auth.guard';
import {
  UserWithdrawAccountInsertReqBodyDto,
  UserWithdrawAccountInsertReqPathDto,
  UserWithdrawAccountInsertResBodyDto,
} from './dto/add-user-withdraw-account.dto';
import {
  UserWithdrawAccountUpdateReqBodyDto,
  UserWithdrawAccountUpdateReqPathDto,
  UserWithdrawAccountUpdateResBodyDto,
} from './dto/update-user-withdraw-account..dto';
import {
  UserWithdrawAccountDeleteReqBodyDto,
  UserWithdrawAccountDeleteReqPathDto,
  UserWithdrawAccountDeleteResBodyDto,
} from './dto/delete-user-withdraw-account..dto';
import {
  UserWithdrawAccountFindReqPathDto,
  UserWithdrawAccountFindResBodyDto,
} from './dto/find-user-withdraw-account..dto';

@ApiBearerAuth()
@ApiTags('api/v1/userwithdrawaccount')
@Controller('api/v1/userwithdrawaccount')
export class UserWithdrawAccountController {
  protected readonly logger: Logger;
  constructor(private userWithdrawAccount: UserWithdrawAccountService) {
    this.logger = new Logger(UserWithdrawAccountController.name);
  }

  @UseGuards(AuthGuards)
  @Post('/add')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw Account API',
    description:
      'Withdraw Account to get money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserWithdrawAccountInsertResBodyDto,
  })
  addUserWithdrawAccountMethod(
    @Body() userWithdrawAccountReqBody: UserWithdrawAccountInsertReqBodyDto,
  ): Promise<UserWithdrawAccountInsertResBodyDto> {
    return this.userWithdrawAccount.addUserWithdraw(
      userWithdrawAccountReqBody,
    );
  }

  @UseGuards(AuthGuards)
  @Post('/update/:withdrawId')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw Account API',
    description:
      'Withdraw Account to get money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserWithdrawAccountUpdateResBodyDto,
  })
  updateUserWithdrawAccountMethod(
    @Param() userWithdrawAccountReqPath: UserWithdrawAccountUpdateReqPathDto,
    @Body() userWithdrawAccountReqBody: UserWithdrawAccountUpdateReqBodyDto,
  ): Promise<UserWithdrawAccountUpdateResBodyDto> {
    return this.userWithdrawAccount.updateUserWithdrawAccount(
      userWithdrawAccountReqPath,
      userWithdrawAccountReqBody,
    );
  }

  @UseGuards(AuthGuards)
  @Post('/delete/:withdrawId')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw Account API',
    description:
      'Withdraw Account to get money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserWithdrawAccountDeleteResBodyDto,
  })
  deleteUserWithdrawAccountMethod(
    @Param() userWithdrawAccountReqPath: UserWithdrawAccountDeleteReqPathDto,
    @Body() userWithdrawAccountReqBody: UserWithdrawAccountDeleteReqBodyDto,
  ): Promise<UserWithdrawAccountUpdateResBodyDto> {
    return this.userWithdrawAccount.deleteUserWithdrawAccount(
      userWithdrawAccountReqPath,
    );
  }

  @UseGuards(AuthGuards)
  @Get()
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw Account API',
    description:
      'Withdraw Account to get money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserWithdrawAccountFindResBodyDto,
  })
  findUserWithdrawAccountMethod(
    @Param() paymentReqPath: UserWithdrawAccountFindReqPathDto,
  ): Promise<UserWithdrawAccountFindResBodyDto[]> {
    return this.userWithdrawAccount.findAllWithdrawAccount(paymentReqPath);
  }
}
