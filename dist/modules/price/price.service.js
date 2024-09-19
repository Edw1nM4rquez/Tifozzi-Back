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
exports.PriceService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const sequelize_1 = require("sequelize");
const product_price_entity_1 = require("../product-price/entities/product-price.entity");
let PriceService = class PriceService {
    constructor(priceRepository, sequelize) {
        this.priceRepository = priceRepository;
        this.sequelize = sequelize;
    }
    async create(createPriceDto) {
        const { detail, ...data } = createPriceDto;
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            const price = await this.priceRepository.create(data, {
                transaction,
            });
            console.log('detail', detail);
            await Promise.all(detail.map(async (det) => {
                await product_price_entity_1.ProductPrice.create({
                    priceVal: det.priceVal,
                    productId: det.productId,
                    priceId: price.id,
                }, { transaction });
            }));
            await transaction.commit();
            return price;
        }
        catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        }
    }
    async findAll() {
        return await this.priceRepository.findAll();
    }
    async findAllActive() {
        return await this.priceRepository.findAll({ where: { isActive: true } });
    }
    async findOne(id) {
        return await this.priceRepository.findByPk(id, {
            include: [
                {
                    model: product_price_entity_1.ProductPrice,
                },
            ],
        });
    }
    async update(id, updatePriceDto) {
        const { detail, ...data } = updatePriceDto;
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            const price = await this.priceRepository.update(data, {
                where: { id },
            });
            await product_price_entity_1.ProductPrice.destroy({ where: { priceId: id } });
            await Promise.all(detail.map(async (det) => {
                await product_price_entity_1.ProductPrice.create({
                    priceVal: det.priceVal,
                    productId: det.productId,
                    priceId: id,
                }, { transaction });
            }));
            await transaction.commit();
            return price;
        }
        catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        }
    }
    async remove(id) {
        return await this.priceRepository.destroy({
            where: { id },
        });
    }
};
exports.PriceService = PriceService;
exports.PriceService = PriceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.PRICE_REPOSITORY)),
    __param(1, (0, common_1.Inject)('SEQUELIZE')),
    __metadata("design:paramtypes", [Object, sequelize_1.Sequelize])
], PriceService);
//# sourceMappingURL=price.service.js.map