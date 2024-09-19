"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceModule = void 0;
const common_1 = require("@nestjs/common");
const price_service_1 = require("./price.service");
const price_controller_1 = require("./price.controller");
const constants_1 = require("../../core/constants");
const price_entity_1 = require("./entities/price.entity");
const database_module_1 = require("../../core/database/database.module");
let PriceModule = class PriceModule {
};
exports.PriceModule = PriceModule;
exports.PriceModule = PriceModule = __decorate([
    (0, common_1.Module)({
        controllers: [price_controller_1.PriceController],
        imports: [database_module_1.DatabaseModule],
        providers: [
            price_service_1.PriceService,
            {
                provide: constants_1.PRICE_REPOSITORY,
                useValue: price_entity_1.Price,
            },
        ],
        exports: [price_service_1.PriceService],
    })
], PriceModule);
//# sourceMappingURL=price.module.js.map