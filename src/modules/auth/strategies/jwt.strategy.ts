import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_SECRET,
    });
  }

  async validate(payload: any) {
    if (payload.type === 'acceess') {
      const user = await this.userService.findOne(payload.sub);
      if (!user) {
        throw new UnauthorizedException(
          'You are not authorized to perform the operation',
        );
      }
      user.password = undefined;
      return user;
    } else {
      throw new UnauthorizedException(
        'You are not authorized to perform the operation',
      );
    }
  }
}
