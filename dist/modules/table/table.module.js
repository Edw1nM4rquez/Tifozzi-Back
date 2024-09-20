"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableModule = void 0;
const common_1 = require("@nestjs/common");
const table_service_1 = require("./table.service");
const table_controller_1 = require("./table.controller");
const constants_1 = require("../../core/constants");
const table_entity_1 = require("./entities/table.entity");
let TableModule = class TableModule {
};
exports.TableModule = TableModule;
exports.TableModule = TableModule = __decorate([
    (0, common_1.Module)({
        controllers: [table_controller_1.TableController],
        providers: [
            table_service_1.TableService,
            {
                provide: constants_1.TABLE_REPOSITORY,
                useValue: table_entity_1.Table,
            },
        ],
    })
], TableModule);
//# sourceMappingURL=table.module.js.map