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
exports.OrderConfigController = void 0;
const common_1 = require("@nestjs/common");
const order_config_service_1 = require("./order-config.service");
const create_order_config_dto_1 = require("./dto/create-order-config.dto");
const update_order_config_dto_1 = require("./dto/update-order-config.dto");
let OrderConfigController = class OrderConfigController {
    constructor(orderConfigService) {
        this.orderConfigService = orderConfigService;
    }
    create(createOrderConfigDto) {
        return this.orderConfigService.create(createOrderConfigDto);
    }
    findAll() {
        return this.orderConfigService.findAll();
    }
    findOne(id) {
        return this.orderConfigService.findOne(+id);
    }
    update(id, updateOrderConfigDto) {
        return this.orderConfigService.update(+id, updateOrderConfigDto);
    }
    remove(id) {
        return this.orderConfigService.remove(+id);
    }
};
exports.OrderConfigController = OrderConfigController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_config_dto_1.CreateOrderConfigDto]),
    __metadata("design:returntype", void 0)
], OrderConfigController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderConfigController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderConfigController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_config_dto_1.UpdateOrderConfigDto]),
    __metadata("design:returntype", void 0)
], OrderConfigController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderConfigController.prototype, "remove", null);
exports.OrderConfigController = OrderConfigController = __decorate([
    (0, common_1.Controller)('order-config'),
    __metadata("design:paramtypes", [order_config_service_1.OrderConfigService])
], OrderConfigController);
//# sourceMappingURL=order-config.controller.js.map