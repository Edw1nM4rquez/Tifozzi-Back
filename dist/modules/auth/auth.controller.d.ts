import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/user.dto';
import { UserUpdateDto } from '../user/dto/userUpdate.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        user: import("../user/entities/user.entity").User;
        authorisation: {
            token: string;
            refresh_token: string;
        };
    }>;
    signUp(user: UserDto): Promise<import("../user/entities/user.entity").User>;
    verify(queryParams: {
        token: string;
    }): Promise<any>;
    resend(resendRequest: {
        email: string;
    }): Promise<any>;
    forgot(forgotRequest: {
        email: string;
    }): Promise<any>;
    checkForgot(queryParams: {
        token: string;
    }): Promise<any>;
    forgotChange(forgotChangeRequest: {
        new_password: string;
        token: string;
    }): Promise<any>;
    logout(req: any): Promise<boolean>;
    refresh(body: any): Promise<any>;
    profile(req: any): Promise<import("../user/entities/user.entity").User>;
    UpdateDrofile(req: any, user: UserUpdateDto): Promise<any>;
}
