"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageService = void 0;
const common_1 = require("@nestjs/common");
let ProductImageService = class ProductImageService {
    create(createProductImageDto) {
        return 'This action adds a new productImage';
    }
    findAll() {
        return `This action returns all productImage`;
    }
    findOne(id) {
        return `This action returns a #${id} productImage`;
    }
    update(id, updateProductImageDto) {
        return `This action updates a #${id} productImage`;
    }
    remove(id) {
        return `This action removes a #${id} productImage`;
    }
};
exports.ProductImageService = ProductImageService;
exports.ProductImageService = ProductImageService = __decorate([
    (0, common_1.Injectable)()
], ProductImageService);
//# sourceMappingURL=product-image.service.js.map