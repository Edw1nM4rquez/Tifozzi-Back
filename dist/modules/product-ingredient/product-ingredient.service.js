"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductIngredientService = void 0;
const common_1 = require("@nestjs/common");
let ProductIngredientService = class ProductIngredientService {
    create(createProductIngredientDto) {
        return 'This action adds a new productIngredient';
    }
    findAll() {
        return `This action returns all productIngredient`;
    }
    findOne(id) {
        return `This action returns a #${id} productIngredient`;
    }
    update(id, updateProductIngredientDto) {
        return `This action updates a #${id} productIngredient`;
    }
    remove(id) {
        return `This action removes a #${id} productIngredient`;
    }
};
exports.ProductIngredientService = ProductIngredientService;
exports.ProductIngredientService = ProductIngredientService = __decorate([
    (0, common_1.Injectable)()
], ProductIngredientService);
//# sourceMappingURL=product-ingredient.service.js.map