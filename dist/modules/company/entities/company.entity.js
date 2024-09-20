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
exports.Company = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const company_branch_entity_1 = require("../../company-branch/entities/company-branch.entity");
const email_company_entity_1 = require("../../email-company/entities/email-company.entity");
const image_entity_1 = require("../../image/entities/image.entity");
let Company = class Company extends sequelize_typescript_1.Model {
};
exports.Company = Company;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Company.prototype, "useEmailServer", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => image_entity_1.Image),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Company.prototype, "imagenId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => image_entity_1.Image),
    __metadata("design:type", image_entity_1.Image)
], Company.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => email_company_entity_1.EmailCompany),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Company.prototype, "emailCompanyId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => email_company_entity_1.EmailCompany),
    __metadata("design:type", email_company_entity_1.EmailCompany)
], Company.prototype, "emailCompany", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => company_branch_entity_1.CompanyBranch),
    __metadata("design:type", Array)
], Company.prototype, "companyBranchs", void 0);
exports.Company = Company = __decorate([
    sequelize_typescript_1.Table
], Company);
//# sourceMappingURL=company.entity.js.map