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
exports.Address = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const city_entity_1 = require("../../city/entities/city.entity");
const country_entity_1 = require("../../country/entities/country.entity");
const state_entity_1 = require("../../state/entities/state.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let Address = class Address extends sequelize_typescript_1.Model {
};
exports.Address = Address;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Address.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Address.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Address.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Address.prototype, "isPrimary", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], Address.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => country_entity_1.Country),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Address.prototype, "countryId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => country_entity_1.Country),
    __metadata("design:type", country_entity_1.Country)
], Address.prototype, "country", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => state_entity_1.State),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Address.prototype, "stateId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => state_entity_1.State),
    __metadata("design:type", state_entity_1.State)
], Address.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => city_entity_1.City),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Address.prototype, "cityId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => city_entity_1.City),
    __metadata("design:type", city_entity_1.City)
], Address.prototype, "city", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Address.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Address.prototype, "user", void 0);
exports.Address = Address = __decorate([
    sequelize_typescript_1.Table
], Address);
//# sourceMappingURL=address.entity.js.map