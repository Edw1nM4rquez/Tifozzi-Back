import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { EmailService } from '../email/email.service';
import { User } from '../user/entities/user.entity';
import { UserDto } from '../user/dto/user.dto';
import { Sequelize } from 'sequelize';
import { Address } from '../address/entities/address.entity';
import { Country } from '../country/entities/country.entity';
import { State } from '../state/entities/state.entity';
import { City } from '../city/entities/city.entity';
import { UserUpdateDto } from '../user/dto/userUpdate.dto';

@Injectable()
export class AuthService {
  private tokenExpired = '24h';
  private tokenExpiredForgot = '1h';

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
    @Inject('SEQUELIZE')
    private readonly sequelize: Sequelize,
    //private readonly userService:UserService
  ) {}

  public async validateUser(email: string, pass: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      return null;
    }
    const match = await this.userService.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }
    const { password, ...result } = user['dataValues'];
    return result;
  }

  public async login(user: User) {
    try {
      if (user?.accountVerified == false) {
        throw {
          code: 'unverified',
          message: 'Please verify your account first',
        };
      }
      if (user?.isActive == false) {
        throw {
          code: 'inactive',
          message: "You've been inactivated by the admin",
        };
      }
      const authorisation = await this.generateToken(user);
      return { user, authorisation };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  public async create(user) {
    try {
      const newUser = await this.userService.create(user, 'CLIENT', false);
      const token = await this.generateTokenClient(newUser.id);
      try {
        const url = `${process.env.FRONT_URL}/auth/confirm?token=${token}&email=${newUser.email}`;
        await this.emailService.sendUserConfirmation(
          url,
          newUser.name,
          newUser.email,
        );
      } catch (error) {
        console.log('error', error);
      }

      return { user: newUser };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  public async signUp(userDto: UserDto) {
    try {
      // const newUser = await this.userService.create(user, 'CLIENT', false);
      // const token = await this.generateTokenClient(newUser.id);
      // return { user: newUser };
      const { address, ...userData } = userDto;
      let transaction;
      try {
        transaction = await this.sequelize.transaction();
        userData.password = await this.hashPassword(userDto.password);
        const newUser = await User.create(
          { ...userData, type: 'CLIENT' },
          {
            transaction,
          },
        );

        const addressRef = await Address.create(
          { ...address, userId: newUser.id },
          {
            transaction,
          },
        );
        await transaction.commit();

        const token = await this.generateTokenClient(newUser.id);
        try {
          const url = `${process.env.FRONT_URL}/auth/confirm?token=${token}&email=${newUser.email}`;
          await this.emailService.sendUserConfirmation(
            url,
            newUser.name,
            newUser.email,
          );
        } catch (error) {
          console.log('error', error);
        }
        newUser.addresses = [addressRef];
        newUser.password = null;
        return newUser;
      } catch (error) {
        if (transaction) {
          await transaction.rollback();
        }
        throw error;
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  private async generateToken(user: User) {
    const payload_access = {
      time: new Date(),
      sub: user.id,
      type: 'acceess',
    };
    const token = await this.jwtService.signAsync(payload_access);
    const payload_refresh = {
      time: new Date(),
      type: 'refresh',
      sub: user.id,
    };
    const refresh_token = await this.jwtService.signAsync(payload_refresh, {
      expiresIn: process.env.JWT_EXPIRES_REFRESH_IN,
    });
    return { token, refresh_token };
  }

  public async verifyUser(token: string): Promise<any> {
    try {
      const tokenVer: any = await jwt.verify(token, process.env.TOKEN_USER);
      await this.userService.verifyUser(tokenVer.id);
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw { code: 'TokenExpired', message: 'Token expired' };
      }

      if (error instanceof jwt.JsonWebTokenError) {
        throw { code: 'InvalidToken', message: 'Invalid token' };
      }
    }

    return { name: 'OK', message: 'Account activated successfully' };
  }

  async resendCode(user: { email: string }): Promise<any> {
    if (!user) {
      throw { code: 'error', message: 'Email is required' };
    }
    const userFind: User = await this.userService.findOneByEmail(user.email);
    if (userFind.accountVerified) {
      throw { code: 'UserAlredyVerified', message: 'User already verified' };
    }
    const token = await this.generateTokenClient(userFind.id);
    const url = `${process.env.FRONT_URL}/auth/confirm?token=${token}&email=${userFind.email}`;
    const email = await this.emailService.sendUserConfirmation(
      url,
      userFind.name,
      userFind.email,
    );
    return { code: 'OK', message: 'Email sent successfully' };
  }

  public async forgotPassword(user: { email: string }): Promise<any> {
    const userFind: User = await this.userService.findOneByEmail(user.email);
    const token = await await this.generateTokenClient(userFind.id);
    const url = `${process.env.FRONT_URL}/auth/reset?token=${token}&email=${userFind.email}`;
    const email = await this.emailService.sendResetPassword(
      url,
      userFind.name,
      userFind.email,
    );
    return { code: 'OK', message: 'Email sent successfully' };
  }

  async checkForgotPasswordToken(token: string): Promise<any> {
    try {
      const tokenVer: any = await jwt.verify(token, process.env.TOKEN_USER);
      return { code: 'OK', message: 'Token valid' };
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw { code: 'TokenExpired', message: 'Token expired' };
      }
      if (error instanceof jwt.JsonWebTokenError) {
        throw { code: 'InvalidToken', message: 'Invalid token' };
      }
    }
  }

  async forgotChangePassword(user: {
    new_password: string;
    token: string;
  }): Promise<any> {
    try {
      const tokenVer: any = await jwt.verify(
        user.token,
        process.env.TOKEN_USER,
      );
      const userFind: User = await this.userService.findOne(tokenVer.id);
      await this.userService.changePassword(userFind.id, user.new_password);
      return { code: 'OK', message: 'Password changed successfully' };
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw { code: 'TokenExpired', message: 'Token expired' };
      }
      if (error instanceof jwt.JsonWebTokenError) {
        throw { code: 'InvalidToken', message: 'Invalid token' };
      }
    }
  }

  public logout(): Promise<boolean> {
    return new Promise<any>((resolve, reject) => {
      resolve(true);
    });
  }

  public async refreshToken(token: string): Promise<any> {
    try {
      console.log('token', token);
      const payload = await this.jwtService.verifyAsync(token);
      console.log('payload', payload);
      if (payload.type === 'refresh') {
        const payload_access = {
          time: new Date(),
          sub: payload.sub,
          type: 'acceess',
        };
        const accessToken = await this.jwtService.sign(payload_access);
        return { accessToken };
      } else {
        throw { code: 'InvalidToken', message: 'Invalid token' };
      }
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw { code: 'TokenExpired', message: 'Token expired' };
      }
      if (error instanceof jwt.JsonWebTokenError) {
        throw { code: 'InvalidToken', message: 'Invalid token' };
      }
    }
  }

  // private async hashPassword(password) {
  //   const hash = await bcrypt.hash(password, 10);
  //   return hash;
  // }

  // private async comparePassword(enteredPassword, dbPassword) {
  //   const match = await bcrypt.compare(enteredPassword, dbPassword);
  //   return match;
  // }

  private generateTokenClient(id: number) {
    const data = {
      time: new Date(),
      id: id,
    };
    return jwt.sign(data, process.env.TOKEN_USER, {
      expiresIn: this.tokenExpired,
    });
  }

  public async getMyProfile(id: number) {
    return await User.findOne({
      where: { id: id },
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Address,
          include: [Country, State, City],
        },
      ],
    });
  }

  public async updateProfile(
    userId: number,
    user: UserUpdateDto,
  ): Promise<any> {
    return await this.userService.update(userId, user);
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }
}
