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
exports.CompanyBranch = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const address_entity_1 = require("../../address/entities/address.entity");
const company_entity_1 = require("../../company/entities/company.entity");
const emission_point_entity_1 = require("../../emission-point/entities/emission-point.entity");
let CompanyBranch = class CompanyBranch extends sequelize_typescript_1.Model {
};
exports.CompanyBranch = CompanyBranch;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], CompanyBranch.prototype, "companyName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], CompanyBranch.prototype, "ruc", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CompanyBranch.prototype, "iva", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], CompanyBranch.prototype, "printTicket", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], CompanyBranch.prototype, "isAccounting", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], CompanyBranch.prototype, "isRimpe", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], CompanyBranch.prototype, "isWithholdingAgent", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], CompanyBranch.prototype, "resolutionAgent", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], CompanyBranch.prototype, "rimpeDescription", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }),
    __metadata("design:type", Number)
], CompanyBranch.prototype, "environment", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], CompanyBranch.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => address_entity_1.Address),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], CompanyBranch.prototype, "addressId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => address_entity_1.Address),
    __metadata("design:type", address_entity_1.Address)
], CompanyBranch.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => company_entity_1.Company),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CompanyBranch.prototype, "companyId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => company_entity_1.Company),
    __metadata("design:type", company_entity_1.Company)
], CompanyBranch.prototype, "company", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => emission_point_entity_1.EmissionPoint),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CompanyBranch.prototype, "emissionPointId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => emission_point_entity_1.EmissionPoint),
    __metadata("design:type", emission_point_entity_1.EmissionPoint)
], CompanyBranch.prototype, "emissionPoint", void 0);
exports.CompanyBranch = CompanyBranch = __decorate([
    sequelize_typescript_1.Table
], CompanyBranch);
//# sourceMappingURL=company-branch.entity.js.map