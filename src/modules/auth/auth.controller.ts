import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../user/dto/user.dto';
import { DoesUserExist } from 'src/core/guards/does-user-exist.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { UserUpdateDto } from '../user/dto/userUpdate.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: UserDto) {
    return await this.authService.signUp(user);
  }

  @Get('verify')
  async verify(@Query() queryParams: { token: string }) {
    try {
      return await this.authService.verifyUser(queryParams.token);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Post('resend')
  async resend(@Body() resendRequest: { email: string }) {
    try {
      return await this.authService.resendCode(resendRequest);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Post('forgot')
  async forgot(@Body() forgotRequest: { email: string }) {
    try {
      return await this.authService.forgotPassword(forgotRequest);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Get('check-forgot')
  async checkForgot(@Query() queryParams: { token: string }) {
    try {
      return await this.authService.checkForgotPasswordToken(queryParams.token);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Post('confirm-forgot')
  async forgotChange(
    @Body() forgotChangeRequest: { new_password: string; token: string },
  ) {
    try {
      return await this.authService.forgotChangePassword(forgotChangeRequest);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('logout')
  async logout(@Req() req) {
    try {
      return await this.authService.logout();
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @ApiBearerAuth()
  @Post('token/refresh')
  async refresh(@Body() body) {
    if (!body.token) {
      throw new BadRequestException({
        code: 'NoTokenInRequest',
        message: 'Invalid Token',
      });
    }
    try {
      return await this.authService.refreshToken(body.token);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  //metodo protegido
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async profile(@Req() req) {
    try {
      return await this.authService.getMyProfile(req.user.id);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('me')
  async UpdateDrofile(@Req() req, @Body() user: UserUpdateDto) {
    try {
      return await this.authService.updateProfile(req.user.id, user);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
