import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserWithdrawMethodService } from './user-withdraw-method.service';
import { AuthGuards } from 'src/auth/auth.guard';
import {
  UserWithdrawMethodInsertReqBodyDto,
  UserWithdrawMethodInsertResBodyDto,
} from './dto/add-user-withdraw.dto';
import {
  UserWithdrawMethodUpdateReqBodyDto,
  UserWithdrawMethodUpdateReqPathDto,
  UserWithdrawMethodUpdateResBodyDto,
} from './dto/update-user-withdraw.dto';
import {
  UserWithdrawMethodDeleteReqBodyDto,
  UserWithdrawMethodDeleteReqPathDto,
  UserWithdrawMethodDeleteResBodyDto,
} from './dto/delete-user-withdraw.dto';
import {
  UserWithdrawMethodFindReqQueryDto,
  UserWithdrawMethodFindResBodyDto,
} from './dto/find-user-withdraw.dto';
import {
  UserWithdrawMethodApproveReqBodyDto,
  UserWithdrawMethodApproveReqPathDto,
  UserWithdrawMethodApproveResBodyDto,
} from './dto/approve-user-withdraw.dto';
import {
  UserWithdrawMethodRejectReqBodyDto,
  UserWithdrawMethodRejectReqPathDto,
  UserWithdrawMethodRejectResBodyDto,
} from './dto/reject-user-withdraw.dto';

@ApiBearerAuth()
@ApiTags('api/v1/withdrawmethod')
@Controller('api/v1/user-withdraw-method')
export class UserWithdrawMethodController {
  protected readonly logger: Logger;
  constructor(private userWithdrawMethod: UserWithdrawMethodService) {
    this.logger = new Logger(UserWithdrawMethodController.name);
  }

  @UseGuards(AuthGuards)
  @Post('/add/:phoneNumber')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw API',
    description: 'To withdraw money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserWithdrawMethodInsertResBodyDto,
  })
  confirmOtpCodeForWithdrawMethod(
    @Body() withdrawMethodReqBody: UserWithdrawMethodInsertReqBodyDto,
  ): Promise<UserWithdrawMethodInsertResBodyDto> {
    return this.userWithdrawMethod.addUserWithdrawMethod(withdrawMethodReqBody);
  }

  @UseGuards(AuthGuards)
  @Post('/update/:withdrawId')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw API',
    description: 'To withdraw money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserWithdrawMethodInsertResBodyDto,
  })
  updateuserWithdrawMethodMethod(
    @Param() withdrawMethodReqPath: UserWithdrawMethodUpdateReqPathDto,
    @Body() withdrawMethodReqBody: UserWithdrawMethodUpdateReqBodyDto,
  ): Promise<UserWithdrawMethodUpdateResBodyDto> {
    return this.userWithdrawMethod.updateUserWithdrawMettod(
      withdrawMethodReqPath,
      withdrawMethodReqBody,
    );
  }

  @UseGuards(AuthGuards)
  @Post('/delete/:withdrawId')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw API',
    description: 'To withdraw money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserWithdrawMethodInsertResBodyDto,
  })
  deleteUserWithdrawMethod(
    @Param() withdrawMethodReqPath: UserWithdrawMethodDeleteReqPathDto,
    @Body() withdrawMethodReqBody: UserWithdrawMethodDeleteReqBodyDto,
  ): Promise<UserWithdrawMethodDeleteResBodyDto> {
    return this.userWithdrawMethod.deleteUserWithdrawMethod(
      withdrawMethodReqPath,
      withdrawMethodReqBody,
    );
  }

  @UseGuards(AuthGuards)
  @Get()
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw API',
    description: 'To withdraw money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserWithdrawMethodInsertResBodyDto,
  })
  findUserWithdrawMethod(
    @Query()
    findAllWithdrawMethodReqQueryDto?: UserWithdrawMethodFindReqQueryDto,
  ): Promise<UserWithdrawMethodFindResBodyDto[]> {
    return this.userWithdrawMethod.findAllWithdrawMethod(
      findAllWithdrawMethodReqQueryDto,
    );
  }

  //   @UseGuards(AuthGuards)
  @Post('/:withdrawId/approve')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw API',
    description:
      'To approve user withdraw money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserWithdrawMethodInsertResBodyDto,
  })
  approveWithdrawMethod(
    @Param() userWithdrawApproveReqPathDto: UserWithdrawMethodApproveReqPathDto,
    @Body() userWithdrawApproveReqBodyDto: UserWithdrawMethodApproveReqBodyDto,
  ): Promise<UserWithdrawMethodApproveResBodyDto> {
    return this.userWithdrawMethod.approveUserWithdrawMethod(
      userWithdrawApproveReqPathDto,
      userWithdrawApproveReqBodyDto,
    );
  }

  //   @UseGuards(AuthGuards)
  @Post('/:withdrawId/reject')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw API',
    description:
      'To approve user withdraw money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserWithdrawMethodRejectResBodyDto,
  })
  rejectWithdrawMethod(
    @Param() userWithdrawRejectReqPathDto: UserWithdrawMethodRejectReqPathDto,
    @Body() userWithdrawRejectReqBodyDto: UserWithdrawMethodRejectReqBodyDto,
  ): Promise<UserWithdrawMethodApproveResBodyDto> {
    return this.userWithdrawMethod.rejectUserWithdrawMethod(
      userWithdrawRejectReqPathDto,
      userWithdrawRejectReqBodyDto,
    );
  }
}
