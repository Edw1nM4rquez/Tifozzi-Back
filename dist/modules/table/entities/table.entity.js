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
exports.Table = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const reservation_entity_1 = require("../../reservation/entities/reservation.entity");
const zone_entity_1 = require("../../zone/entities/zone.entity");
let Table = class Table extends sequelize_typescript_1.Model {
};
exports.Table = Table;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Table.prototype, "number", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Table.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], Table.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => zone_entity_1.Zone),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Table.prototype, "zoneId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => zone_entity_1.Zone),
    __metadata("design:type", zone_entity_1.Zone)
], Table.prototype, "zone", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => reservation_entity_1.Reservation),
    __metadata("design:type", Array)
], Table.prototype, "reservations", void 0);
exports.Table = Table = __decorate([
    sequelize_typescript_1.Table
], Table);
//# sourceMappingURL=table.entity.js.map