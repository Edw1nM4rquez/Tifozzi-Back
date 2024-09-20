"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmissionPointModule = void 0;
const common_1 = require("@nestjs/common");
const emission_point_service_1 = require("./emission-point.service");
const emission_point_controller_1 = require("./emission-point.controller");
const emission_point_entity_1 = require("./entities/emission-point.entity");
const constants_1 = require("../../core/constants");
let EmissionPointModule = class EmissionPointModule {
};
exports.EmissionPointModule = EmissionPointModule;
exports.EmissionPointModule = EmissionPointModule = __decorate([
    (0, common_1.Module)({
        controllers: [emission_point_controller_1.EmissionPointController],
        providers: [
            emission_point_service_1.EmissionPointService,
            {
                provide: constants_1.EMISSION_POINT_REPOSITORY,
                useValue: emission_point_entity_1.EmissionPoint,
            },
        ],
    })
], EmissionPointModule);
//# sourceMappingURL=emission-point.module.js.map