"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueConstraintFilterFilter = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let UniqueConstraintFilterFilter = class UniqueConstraintFilterFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(common_1.HttpStatus.BAD_REQUEST).json({
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: 'Unique constraint violation',
            details: exception.errors.map((err) => err.message),
        });
    }
};
exports.UniqueConstraintFilterFilter = UniqueConstraintFilterFilter;
exports.UniqueConstraintFilterFilter = UniqueConstraintFilterFilter = __decorate([
    (0, common_1.Catch)(sequelize_1.UniqueConstraintError)
], UniqueConstraintFilterFilter);
//# sourceMappingURL=unique-constraint-filter.filter.js.map