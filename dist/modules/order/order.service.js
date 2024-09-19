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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const sequelize_1 = require("sequelize");
const order_detail_entity_1 = require("../order-detail/entities/order-detail.entity");
const product_entity_1 = require("../product/entities/product.entity");
const user_entity_1 = require("../user/entities/user.entity");
const address_entity_1 = require("../address/entities/address.entity");
const country_entity_1 = require("../country/entities/country.entity");
const state_entity_1 = require("../state/entities/state.entity");
const city_entity_1 = require("../city/entities/city.entity");
const emission_point_entity_1 = require("../emission-point/entities/emission-point.entity");
const company_branch_entity_1 = require("../company-branch/entities/company-branch.entity");
let OrderService = class OrderService {
    constructor(orderRepository, sequelize) {
        this.orderRepository = orderRepository;
        this.sequelize = sequelize;
    }
    async create(createOrderDto) {
        const { detail, ...cartData } = createOrderDto;
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            const order = await this.orderRepository.create(cartData, {
                transaction,
            });
            for (const orderDetail of detail) {
                const product = await product_entity_1.Product.findOne({
                    where: { id: orderDetail.productId, isInventoried: true },
                    transaction,
                });
                if (product) {
                    if (product.stock < orderDetail.quantity) {
                        throw new Error(`Product ${product.name} does not have enough stock`);
                    }
                    await product_entity_1.Product.update({ stock: sequelize_1.Sequelize.literal(`stock - ${orderDetail.quantity}`) }, { where: { id: product.id }, transaction });
                }
                await order_detail_entity_1.OrderDetail.create({ ...orderDetail, orderId: order.id }, { transaction });
            }
            const companyBranch = await company_branch_entity_1.CompanyBranch.findOne({
                where: { id: cartData.companyBranchId },
                include: [{ model: emission_point_entity_1.EmissionPoint }],
                transaction,
            });
            if (!companyBranch || !companyBranch.emissionPoint) {
                throw new Error('Emission point not found for the company branch');
            }
            const emissionPoint = companyBranch.emissionPoint;
            await emission_point_entity_1.EmissionPoint.update({ number: sequelize_1.Sequelize.literal('number + 1') }, { where: { id: emissionPoint.id }, transaction });
            await transaction.commit();
            return await this.orderRepository.findOne({
                where: { id: order.id },
                include: [{ model: order_detail_entity_1.OrderDetail, include: [product_entity_1.Product] }],
            });
        }
        catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        }
    }
    async findAll(dateInit, dateEnd, q) {
        const adjustedDateInit = new Date(`${dateInit}T00:00:00.000Z`);
        const adjustedDateEnd = new Date(`${dateEnd}T23:59:59.999Z`);
        const searchCondition = q
            ? {
                [sequelize_1.Op.or]: [
                    { id: { [sequelize_1.Op.eq]: `${+q}` } },
                    { '$User.name$': { [sequelize_1.Op.like]: `%${q}%` } },
                    { '$User.lastname$': { [sequelize_1.Op.like]: `%${q}%` } },
                    { '$User.email$': { [sequelize_1.Op.like]: `%${q}%` } },
                    { '$User.surname$': { [sequelize_1.Op.like]: `%${q}%` } },
                    { '$User.fullName$': { [sequelize_1.Op.like]: `%${q}%` } },
                ],
            }
            : {};
        return this.orderRepository.findAll({
            where: {
                date: {
                    [sequelize_1.Op.between]: [adjustedDateInit, adjustedDateEnd],
                },
                ...searchCondition,
            },
            include: [
                {
                    model: user_entity_1.User,
                    attributes: { exclude: ['password'] },
                },
            ],
        });
    }
    findOne(id) {
        return this.orderRepository.findByPk(id, {
            include: [
                {
                    model: user_entity_1.User,
                    required: true,
                },
                {
                    model: address_entity_1.Address,
                    include: [country_entity_1.Country, state_entity_1.State, city_entity_1.City],
                },
                {
                    model: order_detail_entity_1.OrderDetail,
                    include: [product_entity_1.Product],
                },
            ],
        });
    }
    async update(id, updateOrderDto) {
        const { detail, ...orderData } = updateOrderDto;
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            await this.orderRepository.update(orderData, {
                where: { id },
                transaction,
            });
            await order_detail_entity_1.OrderDetail.destroy({ where: { orderId: id }, transaction });
            await Promise.all(detail.map(async (orderDetail) => {
                await order_detail_entity_1.OrderDetail.create({
                    ...orderDetail,
                    orderId: id,
                }, { transaction });
            }));
            await transaction.commit();
            return await this.orderRepository.findOne({
                where: { id },
                include: [
                    {
                        model: order_detail_entity_1.OrderDetail,
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
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.ORDER_REPOSITORY)),
    __param(1, (0, common_1.Inject)('SEQUELIZE')),
    __metadata("design:paramtypes", [Object, sequelize_1.Sequelize])
], OrderService);
//# sourceMappingURL=order.service.js.map