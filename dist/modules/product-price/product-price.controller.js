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
exports.ProductPriceController = void 0;
const common_1 = require("@nestjs/common");
const product_price_service_1 = require("./product-price.service");
const create_product_price_dto_1 = require("./dto/create-product-price.dto");
const update_product_price_dto_1 = require("./dto/update-product-price.dto");
let ProductPriceController = class ProductPriceController {
    constructor(productPriceService) {
        this.productPriceService = productPriceService;
    }
    create(createProductPriceDto) {
        return this.productPriceService.create(createProductPriceDto);
    }
    findAll() {
        return this.productPriceService.findAll();
    }
    findOne(id) {
        return this.productPriceService.findOne(+id);
    }
    update(id, updateProductPriceDto) {
        return this.productPriceService.update(+id, updateProductPriceDto);
    }
    remove(id) {
        return this.productPriceService.remove(+id);
    }
};
exports.ProductPriceController = ProductPriceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_price_dto_1.CreateProductPriceDto]),
    __metadata("design:returntype", void 0)
], ProductPriceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductPriceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductPriceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_price_dto_1.UpdateProductPriceDto]),
    __metadata("design:returntype", void 0)
], ProductPriceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductPriceController.prototype, "remove", null);
exports.ProductPriceController = ProductPriceController = __decorate([
    (0, common_1.Controller)('product-price'),
    __metadata("design:paramtypes", [product_price_service_1.ProductPriceService])
], ProductPriceController);
//# sourceMappingURL=product-price.controller.js.map