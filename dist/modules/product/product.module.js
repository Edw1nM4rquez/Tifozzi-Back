"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_controller_1 = require("./product.controller");
const constants_1 = require("../../core/constants");
const product_entity_1 = require("./entities/product.entity");
const ingredient_module_1 = require("../ingredient/ingredient.module");
const database_module_1 = require("../../core/database/database.module");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_controller_1.ProductController],
        imports: [ingredient_module_1.IngredientModule, database_module_1.DatabaseModule],
        providers: [
            product_service_1.ProductService,
            {
                provide: constants_1.PRODUCT_REPOSITORY,
                useValue: product_entity_1.Product,
            },
        ],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map