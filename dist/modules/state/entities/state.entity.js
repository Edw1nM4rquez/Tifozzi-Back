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
exports.State = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const address_entity_1 = require("../../address/entities/address.entity");
const city_entity_1 = require("../../city/entities/city.entity");
const country_entity_1 = require("../../country/entities/country.entity");
let State = class State extends sequelize_typescript_1.Model {
};
exports.State = State;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], State.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], State.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => country_entity_1.Country),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], State.prototype, "countryId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => country_entity_1.Country),
    __metadata("design:type", country_entity_1.Country)
], State.prototype, "country", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => city_entity_1.City),
    __metadata("design:type", Array)
], State.prototype, "cities", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => address_entity_1.Address),
    __metadata("design:type", Array)
], State.prototype, "addresses", void 0);
exports.State = State = __decorate([
    sequelize_typescript_1.Table
], State);
//# sourceMappingURL=state.entity.js.map