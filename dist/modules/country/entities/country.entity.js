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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const address_entity_1 = require("../../address/entities/address.entity");
const state_entity_1 = require("../../state/entities/state.entity");
let Country = class Country extends sequelize_typescript_1.Model {
};
exports.Country = Country;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Country.prototype, "code", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Country.prototype, "prefix", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], Country.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => state_entity_1.State),
    __metadata("design:type", Array)
], Country.prototype, "players", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => address_entity_1.Address),
    __metadata("design:type", Array)
], Country.prototype, "addresses", void 0);
exports.Country = Country = __decorate([
    sequelize_typescript_1.Table
], Country);
//# sourceMappingURL=country.entity.js.map