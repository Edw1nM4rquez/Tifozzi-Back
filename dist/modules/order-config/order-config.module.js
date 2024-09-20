"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderConfigModule = void 0;
const common_1 = require("@nestjs/common");
const order_config_service_1 = require("./order-config.service");
const order_config_controller_1 = require("./order-config.controller");
const constants_1 = require("../../core/constants");
const order_config_entity_1 = require("./entities/order-config.entity");
let OrderConfigModule = class OrderConfigModule {
};
exports.OrderConfigModule = OrderConfigModule;
exports.OrderConfigModule = OrderConfigModule = __decorate([
    (0, common_1.Module)({
        controllers: [order_config_controller_1.OrderConfigController],
        providers: [
            order_config_service_1.OrderConfigService,
            {
                provide: constants_1.ORDER_CONFIG_REPOSITORY,
                useValue: order_config_entity_1.OrderConfig,
            },
        ],
        exports: [order_config_service_1.OrderConfigService],
    })
], OrderConfigModule);
//# sourceMappingURL=order-config.module.js.map