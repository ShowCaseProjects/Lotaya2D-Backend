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
import {
  UserPaymentInsertReqBodyDto,
  UserPaymentInsertResBodyDto,
} from './dto/add-user-payment.dto';
import { PaymentmethodService } from './paymentmethod.service';
import {
  UserPaymentUpdateReqBodyDto,
  UserPaymentUpdateReqPathDto,
  UserPaymentUpdateResBodyDto,
} from './dto/update-user-payment.dto';
import { AuthGuards } from 'src/auth/auth.guard';
import {
  UserPaymentDeleteReqBodyDto,
  UserPaymentDeleteReqPathDto,
  UserPaymentDeleteResBodyDto,
} from './dto/delete-user-payment.dto';
import {
  UserPaymentFindReqDto,
  UserPaymentFindReqQueryDto,
  UserPaymentFindResBodyDto,
} from './dto/find-user-payment.dto';

import {
  UserPaymentMethodApproveReqBodyDto,
  UserPaymentMethodApproveReqPathDto,
  UserPaymentMethodApproveResBodyDto,
} from './dto/approve-user-payment.dto';
import {
  UserPaymentMethodRejectReqBodyDto,
  UserPaymentMethodRejectReqPathDto,
  UserPaymentMethodRejectResBodyDto,
} from './dto/reject-user-payment.dto';

@ApiBearerAuth()
@ApiTags('api/v1/paymentmethod')
@Controller('api/v1/paymentmethod')
export class PaymentmethodController {
  protected readonly logger: Logger;
  constructor(private userPayment: PaymentmethodService) {
    this.logger = new Logger(PaymentmethodController.name);
  }

  @UseGuards(AuthGuards)
  @Post('/add')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Payment API',
    description: 'Fill bill to play game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserPaymentInsertResBodyDto,
  })
  addUserPaymentMethod(
    @Body() paymentReqBody: UserPaymentInsertReqBodyDto,
  ): Promise<UserPaymentInsertResBodyDto> {
    return this.userPayment.addUserPayment(paymentReqBody);
  }

  @UseGuards(AuthGuards)
  @Post('/update/:paymentId')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Payment API',
    description: 'Fill bill to play game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserPaymentUpdateResBodyDto,
  })
  updateUserPaymentMethod(
    @Param() paymentReqPath: UserPaymentUpdateReqPathDto,
    @Body() paymentReqBody: UserPaymentUpdateReqBodyDto,
  ): Promise<UserPaymentUpdateResBodyDto> {
    return this.userPayment.updateUserPayment(paymentReqPath, paymentReqBody);
  }

  @UseGuards(AuthGuards)
  @Post('/delete/:paymentId')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Payment API',
    description: 'Fill bill to play game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserPaymentDeleteResBodyDto,
  })
  deleteUserPaymentMethod(
    @Param() paymentReqPath: UserPaymentDeleteReqPathDto,
    @Body() paymentReqBody: UserPaymentDeleteReqBodyDto,
  ): Promise<UserPaymentDeleteResBodyDto> {
    return this.userPayment.deleteUserPayment(paymentReqPath, paymentReqBody);
  }

  // @UseGuards(AdminAuthGuards)
  @Get()
  @HttpCode(201)
  @ApiOperation({
    summary: 'Payment API',
    description: 'Fill bill to play game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserPaymentFindResBodyDto,
  })
  findAllUserPaymentMethod(
    @Query() findAllPaymentMethodReqQueryDto?: UserPaymentFindReqQueryDto,
  ): Promise<UserPaymentFindResBodyDto[]> {
    return this.userPayment.findAllPayment(findAllPaymentMethodReqQueryDto);
  }

  // @UseGuards(AdminAuthGuards)
  @Get('/payment/:paymentId')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Payment API',
    description: 'Fill bill to play game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserPaymentFindResBodyDto,
  })
  async findUserPaymentMethod(
    @Param() findPaymentMethodReqQueryDto?: UserPaymentFindReqDto,
  ): Promise<UserPaymentFindResBodyDto> {
    return this.userPayment.findPayment(findPaymentMethodReqQueryDto);
  }

  @UseGuards(AuthGuards)
  @Post('/:paymentId/approve')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw API',
    description:
      'To approve user withdraw money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserPaymentMethodApproveResBodyDto,
  })
  approvePaymentMethod(
    @Param() userPaymentApproveReqPathDto: UserPaymentMethodApproveReqPathDto,
    @Body() userPaymentApproveReqBodyDto: UserPaymentMethodApproveReqBodyDto,
  ): Promise<UserPaymentMethodApproveResBodyDto> {
    return this.userPayment.approveUserPaymentByAdmin(
      userPaymentApproveReqPathDto,
      userPaymentApproveReqBodyDto,
    );
  }

  @UseGuards(AuthGuards)
  @Post('/:paymentId/reject')
  @HttpCode(201)
  @ApiOperation({
    summary: 'Withdraw API',
    description:
      'To approve user withdraw money from gaining from game with authentication',
  })
  @ApiOkResponse({
    description: 'To send success response to be authenticated user.',
    type: UserPaymentMethodRejectResBodyDto,
  })
  rejectPaymentMethod(
    @Param() userPaymentRejectReqPathDto: UserPaymentMethodRejectReqPathDto,
    @Body() userPaymentRejectReqBodyDto: UserPaymentMethodRejectReqBodyDto,
  ): Promise<UserPaymentMethodApproveResBodyDto> {
    return this.userPayment.rejectUserPaymentByAdmin(
      userPaymentRejectReqPathDto,
      userPaymentRejectReqBodyDto,
    );
  }
}
