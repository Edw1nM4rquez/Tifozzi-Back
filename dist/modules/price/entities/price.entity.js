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
exports.Price = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const company_branch_entity_1 = require("../../company-branch/entities/company-branch.entity");
const product_price_entity_1 = require("../../product-price/entities/product-price.entity");
let Price = class Price extends sequelize_typescript_1.Model {
};
exports.Price = Price;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Price.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Price.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: true,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Price.prototype, "incrementPercentage", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], Price.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => company_branch_entity_1.CompanyBranch),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Price.prototype, "companyBranchId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => company_branch_entity_1.CompanyBranch),
    __metadata("design:type", company_branch_entity_1.CompanyBranch)
], Price.prototype, "companyBranch", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_price_entity_1.ProductPrice),
    __metadata("design:type", Array)
], Price.prototype, "productPrices", void 0);
exports.Price = Price = __decorate([
    sequelize_typescript_1.Table
], Price);
//# sourceMappingURL=price.entity.js.map