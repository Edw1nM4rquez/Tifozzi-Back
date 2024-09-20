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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneController = void 0;
const common_1 = require("@nestjs/common");
const zone_service_1 = require("./zone.service");
const create_zone_dto_1 = require("./dto/create-zone.dto");
const update_zone_dto_1 = require("./dto/update-zone.dto");
const jwt_auth_guard_1 = require("../../core/guards/jwt-auth.guard");
const is_admin_guard_1 = require("../../core/guards/is-admin.guard");
let ZoneController = class ZoneController {
    constructor(zoneService) {
        this.zoneService = zoneService;
    }
    create(createZoneDto) {
        return this.zoneService.create(createZoneDto);
    }
    findAll() {
        return this.zoneService.findAll();
    }
    findAllActive() {
        return this.zoneService.findActive();
    }
    findOne(id) {
        return this.zoneService.findOne(+id);
    }
    update(id, updateZoneDto) {
        return this.zoneService.update(+id, updateZoneDto);
    }
};
exports.ZoneController = ZoneController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_zone_dto_1.CreateZoneDto]),
    __metadata("design:returntype", void 0)
], ZoneController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZoneController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZoneController.prototype, "findAllActive", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ZoneController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_zone_dto_1.UpdateZoneDto]),
    __metadata("design:returntype", void 0)
], ZoneController.prototype, "update", null);
exports.ZoneController = ZoneController = __decorate([
    (0, common_1.Controller)('zone'),
    __metadata("design:paramtypes", [zone_service_1.ZoneService])
], ZoneController);
//# sourceMappingURL=zone.controller.js.map