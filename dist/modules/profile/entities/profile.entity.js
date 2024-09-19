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
exports.Profile = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const permission_entity_1 = require("../../permission/entities/permission.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let Profile = class Profile extends sequelize_typescript_1.Model {
};
exports.Profile = Profile;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Profile.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Profile.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], Profile.prototype, "isActive", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_entity_1.User),
    __metadata("design:type", Array)
], Profile.prototype, "users", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => permission_entity_1.Permission),
    __metadata("design:type", Array)
], Profile.prototype, "permission", void 0);
exports.Profile = Profile = __decorate([
    sequelize_typescript_1.Table
], Profile);
//# sourceMappingURL=profile.entity.js.map