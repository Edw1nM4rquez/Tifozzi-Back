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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const sequelize_1 = require("sequelize");
const product_entity_1 = require("../product/entities/product.entity");
const product_price_entity_1 = require("../product-price/entities/product-price.entity");
const price_entity_1 = require("../price/entities/price.entity");
const product_ingredient_entity_1 = require("../product-ingredient/entities/product-ingredient.entity");
const ingredient_entity_1 = require("../ingredient/entities/ingredient.entity");
const product_image_entity_1 = require("../product-image/entities/product-image.entity");
const image_entity_1 = require("../image/entities/image.entity");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(createCategoryDto) {
        try {
            return await this.categoryRepository.create(createCategoryDto);
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(q) {
        let whereCondition = {};
        if (q) {
            whereCondition = {
                [sequelize_1.Op.or]: [
                    { name: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { description: { [sequelize_1.Op.iLike]: `%${q}%` } },
                ],
            };
        }
        return await this.categoryRepository.findAll({
            where: whereCondition,
        });
    }
    async findAllWithProducts(q, company) {
        let whereCondition = {};
        if (q) {
            whereCondition = {
                isActive: true,
                [sequelize_1.Op.or]: [
                    { name: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { description: { [sequelize_1.Op.iLike]: `%${q}%` } },
                ],
            };
        }
        return await this.categoryRepository.findAll({
            where: whereCondition,
            include: [
                image_entity_1.Image,
                {
                    model: product_entity_1.Product,
                    include: [
                        {
                            model: product_price_entity_1.ProductPrice,
                            include: [{ model: price_entity_1.Price, where: { companyBranchId: company } }],
                        },
                        {
                            model: product_ingredient_entity_1.ProductIngredient,
                            include: [ingredient_entity_1.Ingredient],
                        },
                        {
                            model: product_image_entity_1.ProductImage,
                            include: [image_entity_1.Image],
                        },
                    ],
                },
            ],
        });
    }
    async findAllActive(q) {
        let whereCondition = {};
        if (q) {
            whereCondition = {
                isActive: true,
                [sequelize_1.Op.or]: [
                    { name: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { description: { [sequelize_1.Op.iLike]: `%${q}%` } },
                ],
            };
        }
        return await this.categoryRepository.findAll({
            where: whereCondition,
        });
    }
    async findOne(id) {
        return await this.categoryRepository.findByPk(id);
    }
    async update(id, updateCategoryDto) {
        return await this.categoryRepository.update(updateCategoryDto, {
            where: { id },
        });
    }
    async remove(id) {
        return await this.categoryRepository.destroy({
            where: { id },
        });
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CATEGORY_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], CategoryService);
//# sourceMappingURL=category.service.js.map