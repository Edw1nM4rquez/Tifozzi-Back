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
exports.Cart = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const cart_detail_entity_1 = require("../../cart-detail/entities/cart-detail.entity");
const company_branch_entity_1 = require("../../company-branch/entities/company-branch.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let Cart = class Cart extends sequelize_typescript_1.Model {
};
exports.Cart = Cart;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Cart.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Cart.prototype, "observation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Cart.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Cart.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "subtotal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "subIva", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "subZero", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "ivaPrecent", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "iva", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "discount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "total", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Cart.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => company_branch_entity_1.CompanyBranch),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "companyBranchId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => company_branch_entity_1.CompanyBranch),
    __metadata("design:type", company_branch_entity_1.CompanyBranch)
], Cart.prototype, "companyBranch", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => cart_detail_entity_1.CartDetail),
    __metadata("design:type", Array)
], Cart.prototype, "cartDetails", void 0);
exports.Cart = Cart = __decorate([
    sequelize_typescript_1.Table
], Cart);
//# sourceMappingURL=cart.entity.js.map