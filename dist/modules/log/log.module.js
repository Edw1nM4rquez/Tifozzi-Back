"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogModule = void 0;
const common_1 = require("@nestjs/common");
const log_service_1 = require("./log.service");
const log_controller_1 = require("./log.controller");
const log_entity_1 = require("./entities/log.entity");
const constants_1 = require("../../core/constants");
let LogModule = class LogModule {
};
exports.LogModule = LogModule;
exports.LogModule = LogModule = __decorate([
    (0, common_1.Module)({
        controllers: [log_controller_1.LogController],
        providers: [
            log_service_1.LogService,
            {
                provide: constants_1.LOG_REPOSITORY,
                useValue: log_entity_1.Log,
            },
        ],
    })
], LogModule);
//# sourceMappingURL=log.module.js.map