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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
let EmailService = class EmailService {
    constructor(_mailerService) {
        this._mailerService = _mailerService;
    }
    async sendUserConfirmation(url, name, email) {
        return await this._mailerService.sendMail({
            to: email,
            subject: 'Welcome to Nice App! Confirm your Email',
            template: (0, path_1.join)(__dirname, 'templates', 'confirmation'),
            context: {
                name: name,
                url,
            },
        });
    }
    async sendResetPassword(url, name, email) {
        return await this._mailerService.sendMail({
            to: email,
            subject: 'Nice App! Reset your Password',
            template: (0, path_1.join)(__dirname, 'templates', 'reset'),
            context: {
                name: name,
                url,
            },
        });
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailService);
//# sourceMappingURL=email.service.js.map