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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const sequelize_1 = require("sequelize");
const product_ingredient_entity_1 = require("../product-ingredient/entities/product-ingredient.entity");
const product_image_entity_1 = require("../product-image/entities/product-image.entity");
const category_entity_1 = require("../category/entities/category.entity");
const ingredient_entity_1 = require("../ingredient/entities/ingredient.entity");
const image_entity_1 = require("../image/entities/image.entity");
const product_price_entity_1 = require("../product-price/entities/product-price.entity");
const price_entity_1 = require("../price/entities/price.entity");
let ProductService = class ProductService {
    constructor(productRepository, sequelize) {
        this.productRepository = productRepository;
        this.sequelize = sequelize;
    }
    async create(createProductDto) {
        const { ingredients, images, ...productData } = createProductDto;
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            const product = await this.productRepository.create(productData, {
                transaction,
            });
            await Promise.all(ingredients.map(async (ingredientId) => {
                await product_ingredient_entity_1.ProductIngredient.create({
                    productId: product.id,
                    ingredientId,
                }, { transaction });
            }));
            await Promise.all(images.map(async (imagenId) => {
                await product_image_entity_1.ProductImage.create({
                    productId: product.id,
                    imagenId,
                }, { transaction });
            }));
            await transaction.commit();
            return product;
        }
        catch (error) {
            console.log('error', error);
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        }
    }
    async findAll(q, category, company) {
        let whereCondition = {};
        if (q) {
            whereCondition = {
                [sequelize_1.Op.or]: [
                    { name: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { description: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { code: { [sequelize_1.Op.iLike]: `%${q}%` } },
                ],
            };
        }
        let categoryCondition = {};
        if (category) {
            const categoryIds = category.split(',').map((id) => parseInt(id, 10));
            categoryCondition = {
                id: { [sequelize_1.Op.in]: categoryIds },
            };
        }
        const products = await this.productRepository.findAll({
            where: whereCondition,
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
                {
                    model: category_entity_1.Category,
                    where: categoryCondition,
                },
            ],
        });
        return products;
    }
    async findAllActive() {
        return await this.productRepository.findAll({
            where: { isActive: true },
        });
    }
    async findOneBySlug(slug, company) {
        return await this.productRepository.findOne({
            where: { slug },
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
                {
                    model: category_entity_1.Category,
                },
            ],
        });
    }
    async findOne(id, company) {
        return await this.productRepository.findByPk(id, {
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
                {
                    model: category_entity_1.Category,
                },
            ],
        });
    }
    async update(id, updateProductDto) {
        const { ingredients, images, ...productData } = updateProductDto;
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            const product = await this.productRepository.update(productData, {
                where: { id },
            });
            await product_ingredient_entity_1.ProductIngredient.destroy({ where: { productId: id } });
            await Promise.all(ingredients.map(async (ingredientId) => {
                await product_ingredient_entity_1.ProductIngredient.create({
                    productId: id,
                    ingredientId,
                }, { transaction });
            }));
            await product_image_entity_1.ProductImage.destroy({ where: { productId: id } });
            await Promise.all(images.map(async (imagenId) => {
                await product_image_entity_1.ProductImage.create({
                    productId: id,
                    imagenId,
                }, { transaction });
            }));
            await transaction.commit();
            return product;
        }
        catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.PRODUCT_REPOSITORY)),
    __param(1, (0, common_1.Inject)('SEQUELIZE')),
    __metadata("design:paramtypes", [Object, sequelize_1.Sequelize])
], ProductService);
//# sourceMappingURL=product.service.js.map