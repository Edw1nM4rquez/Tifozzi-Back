"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_controller_1 = require("./order.controller");
const constants_1 = require("../../core/constants");
const order_entity_1 = require("./entities/order.entity");
const database_module_1 = require("../../core/database/database.module");
const order_detail_module_1 = require("../order-detail/order-detail.module");
const company_branch_module_1 = require("../company-branch/company-branch.module");
const product_module_1 = require("../product/product.module");
const emission_point_module_1 = require("../emission-point/emission-point.module");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        controllers: [order_controller_1.OrderController],
        imports: [
            order_detail_module_1.OrderDetailModule,
            company_branch_module_1.CompanyBranchModule,
            emission_point_module_1.EmissionPointModule,
            product_module_1.ProductModule,
            database_module_1.DatabaseModule,
        ],
        providers: [
            order_service_1.OrderService,
            {
                provide: constants_1.ORDER_REPOSITORY,
                useValue: order_entity_1.Order,
            },
        ],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map