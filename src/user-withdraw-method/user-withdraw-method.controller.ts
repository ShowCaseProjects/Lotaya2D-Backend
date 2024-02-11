import { Body, Controller, Get, HttpCode, Logger, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserWithdrawMethodService } from './user-withdraw-method.service';
import { AuthGuards } from 'src/auth/auth.guard';
import { UserWithdrawMethodInsertReqBodyDto, UserWithdrawMethodInsertReqPathDto, UserWithdrawMethodInsertResBodyDto } from './dto/add-user-withdraw.dto';
import { UserWithdrawMethodUpdateReqBodyDto, UserWithdrawMethodUpdateReqPathDto, UserWithdrawMethodUpdateResBodyDto } from './dto/update-user-withdraw.dto';
import { UserWithdrawMethodDeleteReqBodyDto, UserWithdrawMethodDeleteReqPathDto, UserWithdrawMethodDeleteResBodyDto } from './dto/delete-user-withdraw.dto';
import { UserWithdrawMethodFindReqQueryDto, UserWithdrawMethodFindResBodyDto } from './dto/find-user-withdraw.dto';


@ApiBearerAuth()
@ApiTags('api/v1/paymentmethod')
@Controller('api/v1/user-withdraw-method')
export class UserWithdrawMethodController {
    protected readonly logger: Logger;
    constructor(private userWithdrawMethod: UserWithdrawMethodService) {
        this.logger = new Logger(UserWithdrawMethodController.name);
    }

    @UseGuards(AuthGuards)
    @Post('/add/:userId')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Payment API',
        description: 'To withdraw money from gaining from game with authentication'
    })
    @ApiOkResponse({
        description: 'To send success response to be authenticated user.',
        type: UserWithdrawMethodInsertResBodyDto
    })
    addUserWithdrawMethod(@Param() withdrawMethodReqPath: UserWithdrawMethodInsertReqPathDto, @Body() withdrawMethodReqBody: UserWithdrawMethodInsertReqBodyDto): Promise<UserWithdrawMethodInsertResBodyDto> {
        return this.userWithdrawMethod.addUserWithdrawMethod(withdrawMethodReqPath,withdrawMethodReqBody);
    }

    @UseGuards(AuthGuards)
    @Post('/update/:withdrawId')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Payment API',
        description: 'To withdraw money from gaining from game with authentication'
    })
    @ApiOkResponse({
        description: 'To send success response to be authenticated user.',
        type: UserWithdrawMethodInsertResBodyDto
    })
    updateuserWithdrawMethodMethod(@Param() withdrawMethodReqPath: UserWithdrawMethodUpdateReqPathDto, @Body() withdrawMethodReqBody: UserWithdrawMethodUpdateReqBodyDto): Promise<UserWithdrawMethodUpdateResBodyDto> {
        return this.userWithdrawMethod.updateUserWithdrawMettod(withdrawMethodReqPath,withdrawMethodReqBody);
    }

    @UseGuards(AuthGuards)
    @Post('/delete/:withdrawId')
    @HttpCode(201)
    @ApiOperation({
        summary: 'Payment API',
        description: 'To withdraw money from gaining from game with authentication'
    })
    @ApiOkResponse({
        description: 'To send success response to be authenticated user.',
        type: UserWithdrawMethodInsertResBodyDto
    })
    deleteUserWithdrawMethod(@Param() withdrawMethodReqPath: UserWithdrawMethodDeleteReqPathDto, @Body() withdrawMethodReqBody: UserWithdrawMethodDeleteReqBodyDto): Promise<UserWithdrawMethodDeleteResBodyDto> {
        return this.userWithdrawMethod.deleteUserWithdrawMethod(withdrawMethodReqPath,withdrawMethodReqBody);
    }

    @UseGuards(AuthGuards)
    @Get()
    @HttpCode(201)
    @ApiOperation({
        summary: 'Payment API',
        description: 'To withdraw money from gaining from game with authentication'
    })
    @ApiOkResponse({
        description: 'To send success response to be authenticated user.',
        type: UserWithdrawMethodInsertResBodyDto
    })
    findUserWithdrawMethod(@Query() findAllWithdrawMethodReqQueryDto?: UserWithdrawMethodFindReqQueryDto): Promise<UserWithdrawMethodFindResBodyDto[]> {
        return this.userWithdrawMethod.findAllWithdrawMethod(findAllWithdrawMethodReqQueryDto);
    }
}