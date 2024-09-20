"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const email_service_1 = require("../email/email.service");
const user_entity_1 = require("../user/entities/user.entity");
const sequelize_1 = require("sequelize");
const address_entity_1 = require("../address/entities/address.entity");
const country_entity_1 = require("../country/entities/country.entity");
const state_entity_1 = require("../state/entities/state.entity");
const city_entity_1 = require("../city/entities/city.entity");
let AuthService = class AuthService {
    constructor(userService, jwtService, emailService, sequelize) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.emailService = emailService;
        this.sequelize = sequelize;
        this.tokenExpired = '24h';
        this.tokenExpiredForgot = '1h';
    }
    async validateUser(email, pass) {
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
    async login(user) {
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
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async create(user) {
        try {
            const newUser = await this.userService.create(user, 'CLIENT', false);
            const token = await this.generateTokenClient(newUser.id);
            try {
                const url = `${process.env.FRONT_URL}/auth/confirm?token=${token}&email=${newUser.email}`;
                await this.emailService.sendUserConfirmation(url, newUser.name, newUser.email);
            }
            catch (error) {
                console.log('error', error);
            }
            return { user: newUser };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async signUp(userDto) {
        try {
            const { address, ...userData } = userDto;
            let transaction;
            try {
                transaction = await this.sequelize.transaction();
                userData.password = await this.hashPassword(userDto.password);
                const newUser = await user_entity_1.User.create({ ...userData, type: 'CLIENT' }, {
                    transaction,
                });
                const addressRef = await address_entity_1.Address.create({ ...address, userId: newUser.id }, {
                    transaction,
                });
                await transaction.commit();
                const token = await this.generateTokenClient(newUser.id);
                try {
                    const url = `${process.env.FRONT_URL}/auth/confirm?token=${token}&email=${newUser.email}`;
                    await this.emailService.sendUserConfirmation(url, newUser.name, newUser.email);
                }
                catch (error) {
                    console.log('error', error);
                }
                newUser.addresses = [addressRef];
                newUser.password = null;
                return newUser;
            }
            catch (error) {
                if (transaction) {
                    await transaction.rollback();
                }
                throw error;
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async generateToken(user) {
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
    async verifyUser(token) {
        try {
            const tokenVer = await jwt.verify(token, process.env.TOKEN_USER);
            await this.userService.verifyUser(tokenVer.id);
        }
        catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                throw { code: 'TokenExpired', message: 'Token expired' };
            }
            if (error instanceof jwt.JsonWebTokenError) {
                throw { code: 'InvalidToken', message: 'Invalid token' };
            }
        }
        return { name: 'OK', message: 'Account activated successfully' };
    }
    async resendCode(user) {
        if (!user) {
            throw { code: 'error', message: 'Email is required' };
        }
        const userFind = await this.userService.findOneByEmail(user.email);
        if (userFind.accountVerified) {
            throw { code: 'UserAlredyVerified', message: 'User already verified' };
        }
        const token = await this.generateTokenClient(userFind.id);
        const url = `${process.env.FRONT_URL}/auth/confirm?token=${token}&email=${userFind.email}`;
        const email = await this.emailService.sendUserConfirmation(url, userFind.name, userFind.email);
        return { code: 'OK', message: 'Email sent successfully' };
    }
    async forgotPassword(user) {
        const userFind = await this.userService.findOneByEmail(user.email);
        const token = await await this.generateTokenClient(userFind.id);
        const url = `${process.env.FRONT_URL}/auth/reset?token=${token}&email=${userFind.email}`;
        const email = await this.emailService.sendResetPassword(url, userFind.name, userFind.email);
        return { code: 'OK', message: 'Email sent successfully' };
    }
    async checkForgotPasswordToken(token) {
        try {
            const tokenVer = await jwt.verify(token, process.env.TOKEN_USER);
            return { code: 'OK', message: 'Token valid' };
        }
        catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                throw { code: 'TokenExpired', message: 'Token expired' };
            }
            if (error instanceof jwt.JsonWebTokenError) {
                throw { code: 'InvalidToken', message: 'Invalid token' };
            }
        }
    }
    async forgotChangePassword(user) {
        try {
            const tokenVer = await jwt.verify(user.token, process.env.TOKEN_USER);
            const userFind = await this.userService.findOne(tokenVer.id);
            await this.userService.changePassword(userFind.id, user.new_password);
            return { code: 'OK', message: 'Password changed successfully' };
        }
        catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                throw { code: 'TokenExpired', message: 'Token expired' };
            }
            if (error instanceof jwt.JsonWebTokenError) {
                throw { code: 'InvalidToken', message: 'Invalid token' };
            }
        }
    }
    logout() {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
    async refreshToken(token) {
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
            }
            else {
                throw { code: 'InvalidToken', message: 'Invalid token' };
            }
        }
        catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                throw { code: 'TokenExpired', message: 'Token expired' };
            }
            if (error instanceof jwt.JsonWebTokenError) {
                throw { code: 'InvalidToken', message: 'Invalid token' };
            }
        }
    }
    generateTokenClient(id) {
        const data = {
            time: new Date(),
            id: id,
        };
        return jwt.sign(data, process.env.TOKEN_USER, {
            expiresIn: this.tokenExpired,
        });
    }
    async getMyProfile(id) {
        return await user_entity_1.User.findOne({
            where: { id: id },
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: address_entity_1.Address,
                    include: [country_entity_1.Country, state_entity_1.State, city_entity_1.City],
                },
            ],
        });
    }
    async updateProfile(userId, user) {
        return await this.userService.update(userId, user);
    }
    async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)('SEQUELIZE')),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        email_service_1.EmailService,
        sequelize_1.Sequelize])
], AuthService);
//# sourceMappingURL=auth.service.js.map