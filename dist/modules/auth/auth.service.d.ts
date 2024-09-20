import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../email/email.service';
import { User } from '../user/entities/user.entity';
import { UserDto } from '../user/dto/user.dto';
import { Sequelize } from 'sequelize';
import { Address } from '../address/entities/address.entity';
import { UserUpdateDto } from '../user/dto/userUpdate.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly emailService;
    private readonly sequelize;
    private tokenExpired;
    private tokenExpiredForgot;
    constructor(userService: UserService, jwtService: JwtService, emailService: EmailService, sequelize: Sequelize);
    validateUser(email: string, pass: string): Promise<{
        uuid: string;
        name: string;
        surname: string;
        fullName: string;
        phone: string;
        ruc: string;
        email: string;
        dateOfBirth: Date;
        accountVerified: boolean;
        isActive: boolean;
        gender: string;
        type: string;
        departmentId: number;
        department: import("../department/entities/department.entity").Department;
        profileId: number;
        profile: import("../profile/entities/profile.entity").Profile;
        imageId: number;
        image: import("../image/entities/image.entity").Image;
        roleId: number;
        role: import("../role/entities/role.entity").Role;
        addresses: Address[];
        id?: any;
        createdAt?: any;
        updatedAt?: any;
        deletedAt?: any;
        version?: any;
        _attributes: User;
        dataValues: User;
        _creationAttributes: User;
        isNewRecord: boolean;
        sequelize: Sequelize;
        _model: import("sequelize").Model<User, User>;
    }>;
    login(user: User): Promise<{
        user: User;
        authorisation: {
            token: string;
            refresh_token: string;
        };
    }>;
    create(user: any): Promise<{
        user: User;
    }>;
    signUp(userDto: UserDto): Promise<User>;
    private generateToken;
    verifyUser(token: string): Promise<any>;
    resendCode(user: {
        email: string;
    }): Promise<any>;
    forgotPassword(user: {
        email: string;
    }): Promise<any>;
    checkForgotPasswordToken(token: string): Promise<any>;
    forgotChangePassword(user: {
        new_password: string;
        token: string;
    }): Promise<any>;
    logout(): Promise<boolean>;
    refreshToken(token: string): Promise<any>;
    private generateTokenClient;
    getMyProfile(id: number): Promise<User>;
    updateProfile(userId: number, user: UserUpdateDto): Promise<any>;
    private hashPassword;
}
