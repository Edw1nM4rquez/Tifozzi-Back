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
exports.EmailCompanyController = void 0;
const common_1 = require("@nestjs/common");
const email_company_service_1 = require("./email-company.service");
const create_email_company_dto_1 = require("./dto/create-email-company.dto");
const update_email_company_dto_1 = require("./dto/update-email-company.dto");
let EmailCompanyController = class EmailCompanyController {
    constructor(emailCompanyService) {
        this.emailCompanyService = emailCompanyService;
    }
    create(createEmailCompanyDto) {
        return this.emailCompanyService.create(createEmailCompanyDto);
    }
    findAll() {
        return this.emailCompanyService.findAll();
    }
    findOne(id) {
        return this.emailCompanyService.findOne(+id);
    }
    update(id, updateEmailCompanyDto) {
        return this.emailCompanyService.update(+id, updateEmailCompanyDto);
    }
    remove(id) {
        return this.emailCompanyService.remove(+id);
    }
};
exports.EmailCompanyController = EmailCompanyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_email_company_dto_1.CreateEmailCompanyDto]),
    __metadata("design:returntype", void 0)
], EmailCompanyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmailCompanyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmailCompanyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_email_company_dto_1.UpdateEmailCompanyDto]),
    __metadata("design:returntype", void 0)
], EmailCompanyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmailCompanyController.prototype, "remove", null);
exports.EmailCompanyController = EmailCompanyController = __decorate([
    (0, common_1.Controller)('email-company'),
    __metadata("design:paramtypes", [email_company_service_1.EmailCompanyService])
], EmailCompanyController);
//# sourceMappingURL=email-company.controller.js.map