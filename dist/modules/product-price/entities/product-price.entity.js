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
exports.ProductPrice = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const price_entity_1 = require("../../price/entities/price.entity");
const product_entity_1 = require("../../product/entities/product.entity");
let ProductPrice = class ProductPrice extends sequelize_typescript_1.Model {
};
exports.ProductPrice = ProductPrice;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
    }),
    __metadata("design:type", Number)
], ProductPrice.prototype, "priceVal", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => product_entity_1.Product),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], ProductPrice.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => product_entity_1.Product),
    __metadata("design:type", product_entity_1.Product)
], ProductPrice.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => price_entity_1.Price),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], ProductPrice.prototype, "priceId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => price_entity_1.Price),
    __metadata("design:type", price_entity_1.Price)
], ProductPrice.prototype, "price", void 0);
exports.ProductPrice = ProductPrice = __decorate([
    sequelize_typescript_1.Table
], ProductPrice);
//# sourceMappingURL=product-price.entity.js.map