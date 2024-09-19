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
exports.CompanyBranchController = void 0;
const common_1 = require("@nestjs/common");
const company_branch_service_1 = require("./company-branch.service");
const create_company_branch_dto_1 = require("./dto/create-company-branch.dto");
const update_company_branch_dto_1 = require("./dto/update-company-branch.dto");
const is_admin_guard_1 = require("../../core/guards/is-admin.guard");
const jwt_auth_guard_1 = require("../../core/guards/jwt-auth.guard");
let CompanyBranchController = class CompanyBranchController {
    constructor(companyBranchService) {
        this.companyBranchService = companyBranchService;
    }
    create(createCompanyBranchDto) {
        return this.companyBranchService.create(createCompanyBranchDto);
    }
    findAll() {
        return this.companyBranchService.findAll();
    }
    findAllActive() {
        try {
            return this.companyBranchService.findAllActive();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findOne(id) {
        return this.companyBranchService.findOne(+id);
    }
    update(id, updateCompanyBranchDto) {
        return this.companyBranchService.update(+id, updateCompanyBranchDto);
    }
    async findBranchByState(stateId, response) {
        const company = await this.companyBranchService.findBranchByState(+stateId);
        if (company) {
            response.cookie('companyId', company.id);
        }
        return company;
    }
};
exports.CompanyBranchController = CompanyBranchController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_company_branch_dto_1.CreateCompanyBranchDto]),
    __metadata("design:returntype", void 0)
], CompanyBranchController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyBranchController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Get)('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyBranchController.prototype, "findAllActive", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompanyBranchController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_company_branch_dto_1.UpdateCompanyBranchDto]),
    __metadata("design:returntype", void 0)
], CompanyBranchController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('state/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompanyBranchController.prototype, "findBranchByState", null);
exports.CompanyBranchController = CompanyBranchController = __decorate([
    (0, common_1.Controller)('company-branch'),
    __metadata("design:paramtypes", [company_branch_service_1.CompanyBranchService])
], CompanyBranchController);
//# sourceMappingURL=company-branch.controller.js.map