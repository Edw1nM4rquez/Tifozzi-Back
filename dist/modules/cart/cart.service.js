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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const sequelize_1 = require("sequelize");
const cart_detail_entity_1 = require("../cart-detail/entities/cart-detail.entity");
const product_entity_1 = require("../product/entities/product.entity");
let CartService = class CartService {
    constructor(cartRepository, sequelize) {
        this.cartRepository = cartRepository;
        this.sequelize = sequelize;
    }
    async create(createCartDto, userId) {
        const { detail, ...cartData } = createCartDto;
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            const cart = await this.cartRepository.create({
                ...cartData,
                userId,
            }, {
                transaction,
            });
            console.log('cart created', cart);
            await Promise.all(detail.map(async (cartDetail) => {
                await cart_detail_entity_1.CartDetail.create({
                    ...cartDetail,
                    cartId: cart.id,
                }, { transaction });
            }));
            await transaction.commit();
            return await this.cartRepository.findOne({
                where: { id: cart.id },
                include: [
                    {
                        model: cart_detail_entity_1.CartDetail,
                        include: [product_entity_1.Product],
                    },
                ],
            });
        }
        catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        }
    }
    async findAll() {
        const carts = await this.cartRepository.findAll();
        return carts;
    }
    async findOneByUser(userId) {
        return await this.cartRepository.findOne({
            where: { userId },
            include: [
                {
                    model: cart_detail_entity_1.CartDetail,
                    include: [product_entity_1.Product],
                },
            ],
        });
    }
    async update(updateCartDto, userId) {
        const { id, detail, ...cartData } = updateCartDto;
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            await this.cartRepository.update(cartData, {
                where: { id, userId },
                transaction,
            });
            await cart_detail_entity_1.CartDetail.destroy({ where: { cartId: id }, transaction });
            await Promise.all(detail.map(async (cartDetail) => {
                await cart_detail_entity_1.CartDetail.create({
                    ...cartDetail,
                    cartId: id,
                }, { transaction });
            }));
            await transaction.commit();
            return await this.cartRepository.findOne({
                where: { id },
                include: [
                    {
                        model: cart_detail_entity_1.CartDetail,
                        include: [product_entity_1.Product],
                    },
                ],
            });
        }
        catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        }
    }
    async remove(userId) {
        let transaction;
        try {
            transaction = await this.cartRepository.sequelize.transaction();
            const cart = await this.cartRepository.findOne({
                where: { userId },
            });
            await cart_detail_entity_1.CartDetail.destroy({
                where: { cartId: cart.id },
                transaction,
            });
            const deletedCarts = await this.cartRepository.destroy({
                where: { userId },
                transaction,
            });
            await transaction.commit();
            return deletedCarts;
        }
        catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        }
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CART_REPOSITORY)),
    __param(1, (0, common_1.Inject)('SEQUELIZE')),
    __metadata("design:paramtypes", [Object, sequelize_1.Sequelize])
], CartService);
//# sourceMappingURL=cart.service.js.map