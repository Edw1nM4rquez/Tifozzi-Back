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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const user_dto_1 = require("../user/dto/user.dto");
const does_user_exist_guard_1 = require("../../core/guards/does-user-exist.guard");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../core/guards/jwt-auth.guard");
const userUpdate_dto_1 = require("../user/dto/userUpdate.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(req) {
        return await this.authService.login(req.user);
    }
    async signUp(user) {
        return await this.authService.signUp(user);
    }
    async verify(queryParams) {
        try {
            return await this.authService.verifyUser(queryParams.token);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async resend(resendRequest) {
        try {
            return await this.authService.resendCode(resendRequest);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async forgot(forgotRequest) {
        try {
            return await this.authService.forgotPassword(forgotRequest);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async checkForgot(queryParams) {
        try {
            return await this.authService.checkForgotPasswordToken(queryParams.token);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async forgotChange(forgotChangeRequest) {
        try {
            return await this.authService.forgotChangePassword(forgotChangeRequest);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async logout(req) {
        try {
            return await this.authService.logout();
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async refresh(body) {
        if (!body.token) {
            throw new common_1.BadRequestException({
                code: 'NoTokenInRequest',
                message: 'Invalid Token',
            });
        }
        try {
            return await this.authService.refreshToken(body.token);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async profile(req) {
        try {
            return await this.authService.getMyProfile(req.user.id);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async UpdateDrofile(req, user) {
        try {
            return await this.authService.updateProfile(req.user.id, user);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(does_user_exist_guard_1.DoesUserExist),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Get)('verify'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)('resend'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resend", null);
__decorate([
    (0, common_1.Post)('forgot'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgot", null);
__decorate([
    (0, common_1.Get)('check-forgot'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "checkForgot", null);
__decorate([
    (0, common_1.Post)('confirm-forgot'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotChange", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('token/refresh'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "profile", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('me'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, userUpdate_dto_1.UserUpdateDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "UpdateDrofile", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map