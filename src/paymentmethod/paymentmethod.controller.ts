import { Body, Controller, Get, HttpCode, Logger, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserPaymentInsertReqBodyDto, UserPaymentInsertReqPathDto, UserPaymentInsertResBodyDto } from './dto/add-user-payment.dto';
import { PaymentmethodService } from './paymentmethod.service';
import { UserPaymentUpdateReqBodyDto, UserPaymentUpdateReqPathDto, UserPaymentUpdateResBodyDto } from './dto/update-user-payment.dto';
import { AuthGuards } from 'src/auth/auth.guard';
import { UserPaymentDeleteReqBodyDto, UserPaymentDeleteReqPathDto, UserPaymentDeleteResBodyDto } from './dto/delete-user-payment.dto';
import { UserPaymentFindReqPathDto, UserPaymentFindResBodyDto } from './dto/find-user-payment.dto';

@ApiBearerAuth()
@ApiTags('api/v1/paymentmethod')
@Controller('api/v1/paymentmethod')
export class PaymentmethodController {
    
    protected readonly logger: Logger;
    constructor(private userPayment: PaymentmethodService) {
        this.logger = new Logger(PaymentmethodController.name);
    }
    
    @UseGuards(AuthGuards)
    @Post('/add/:userId')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Payment API',
        description: 'Fill bill to play game with authentication'
    })
    @ApiOkResponse({
        description: 'To send success response to be authenticated user.',
        type: UserPaymentInsertResBodyDto
    })
    addUserPaymentMethod(@Param() paymentReqPath: UserPaymentInsertReqPathDto,@Body() paymentReqBody:UserPaymentInsertReqBodyDto): Promise<UserPaymentInsertResBodyDto> {
        return this.userPayment.addUserPayment(paymentReqPath,paymentReqBody);
    }
    
    @UseGuards(AuthGuards)
    @Post('/update/:paymentId')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Payment API',
        description: 'Fill bill to play game with authentication'
    })
    @ApiOkResponse({
        description: 'To send success response to be authenticated user.',
        type: UserPaymentUpdateResBodyDto
    })
    updateUserPaymentMethod(@Param() paymentReqPath: UserPaymentUpdateReqPathDto,@Body() paymentReqBody:UserPaymentUpdateReqBodyDto): Promise<UserPaymentUpdateResBodyDto> {
        return this.userPayment.updateUserPayment(paymentReqPath,paymentReqBody);
    }

    @UseGuards(AuthGuards)
    @Post('/delete/:paymentId')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Payment API',
        description: 'Fill bill to play game with authentication'
    })
    @ApiOkResponse({
        description: 'To send success response to be authenticated user.',
        type: UserPaymentDeleteResBodyDto
    })
    deleteUserPaymentMethod(@Param() paymentReqPath: UserPaymentDeleteReqPathDto,@Body() paymentReqBody:UserPaymentDeleteReqBodyDto): Promise<UserPaymentDeleteResBodyDto> {
        return this.userPayment.deleteUserPayment(paymentReqPath,paymentReqBody);
    }

    @UseGuards(AuthGuards)
    @Get()
    @HttpCode(201)
    @ApiOperation({
        summary: 'Payment API',
        description: 'Fill bill to play game with authentication'
    })
    @ApiOkResponse({
        description: 'To send success response to be authenticated user.',
        type: UserPaymentFindResBodyDto
    })
    findUserPaymentMethod(@Param() paymentReqPath: UserPaymentFindReqPathDto): Promise<UserPaymentFindResBodyDto[]> {
        return this.userPayment.findAllPayment({});
    }
}
