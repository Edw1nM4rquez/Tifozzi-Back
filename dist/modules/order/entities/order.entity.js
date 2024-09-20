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
exports.Order = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const address_entity_1 = require("../../address/entities/address.entity");
const company_branch_entity_1 = require("../../company-branch/entities/company-branch.entity");
const order_detail_entity_1 = require("../../order-detail/entities/order-detail.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let Order = class Order extends sequelize_typescript_1.Model {
};
exports.Order = Order;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Order.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "observation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Order.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Order.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "subtotal", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "subIva", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "subZero", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "ivaPrecent", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "iva", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "discount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: ['REGISTERED', 'PROCESSING', 'PREPARING', 'BILLED'],
        allowNull: false,
        defaultValue: 'REGISTERED',
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Order.prototype, "isWeb", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Order.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => company_branch_entity_1.CompanyBranch),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Order.prototype, "companyBranchId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => company_branch_entity_1.CompanyBranch),
    __metadata("design:type", company_branch_entity_1.CompanyBranch)
], Order.prototype, "companyBranch", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => address_entity_1.Address),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Order.prototype, "addressId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => address_entity_1.Address),
    __metadata("design:type", address_entity_1.Address)
], Order.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => order_detail_entity_1.OrderDetail),
    __metadata("design:type", Array)
], Order.prototype, "orderDetails", void 0);
exports.Order = Order = __decorate([
    sequelize_typescript_1.Table
], Order);
//# sourceMappingURL=order.entity.js.map