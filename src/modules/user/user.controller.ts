import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpException,
  HttpStatus,
  UseGuards,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';
import { DoesUserExist } from 'src/core/guards/does-user-exist.guard';
import { User } from './entities/user.entity';
import { UserUpdateDto } from './dto/userUpdate.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @UseGuards(DoesUserExist)
  @Post()
  async create(@Body() user: UserDto) {
    try {
      return await this.userService.create(user, user?.type, true);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get()
  async findAllUsers() {
    try {
      return await this.userService.findAllUsers();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get('clients')
  async findAllClients(@Query('q') q?: string) {
    try {
      return await this.userService.findAllClients(q);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('birthday')
  async findBirthday(
    @Query('month') month?: number,
    @Query('day') day?: number,
  ) {
    try {
      if (!month || !day) {
        throw new HttpException(
          'Month and Day required',
          HttpStatus.BAD_REQUEST,
        );
      }
      return await this.userService.findBirthday(month, day);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const resp: User = await this.userService.findOne(+id);
      resp.password = undefined;
      resp.type = undefined;
      if (!resp) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return resp;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard, IsAdminGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() user: UserUpdateDto) {
    try {
      return await this.userService.update(+id, user);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
