"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartDetailModule = void 0;
const common_1 = require("@nestjs/common");
const cart_detail_service_1 = require("./cart-detail.service");
const cart_detail_controller_1 = require("./cart-detail.controller");
const constants_1 = require("../../core/constants");
const cart_detail_entity_1 = require("./entities/cart-detail.entity");
let CartDetailModule = class CartDetailModule {
};
exports.CartDetailModule = CartDetailModule;
exports.CartDetailModule = CartDetailModule = __decorate([
    (0, common_1.Module)({
        controllers: [cart_detail_controller_1.CartDetailController],
        providers: [
            cart_detail_service_1.CartDetailService,
            {
                provide: constants_1.CART_DETAIL_REPOSITORY,
                useValue: cart_detail_entity_1.CartDetail,
            },
        ],
    })
], CartDetailModule);
//# sourceMappingURL=cart-detail.module.js.map