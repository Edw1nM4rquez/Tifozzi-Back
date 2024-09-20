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
exports.EmissionPointController = void 0;
const common_1 = require("@nestjs/common");
const emission_point_service_1 = require("./emission-point.service");
const create_emission_point_dto_1 = require("./dto/create-emission-point.dto");
const update_emission_point_dto_1 = require("./dto/update-emission-point.dto");
const jwt_auth_guard_1 = require("../../core/guards/jwt-auth.guard");
const is_admin_guard_1 = require("../../core/guards/is-admin.guard");
let EmissionPointController = class EmissionPointController {
    constructor(emissionPointService) {
        this.emissionPointService = emissionPointService;
    }
    create(createEmissionPointDto) {
        return this.emissionPointService.create(createEmissionPointDto);
    }
    findAll() {
        return this.emissionPointService.findAll();
    }
    findAllActive() {
        try {
            return this.emissionPointService.findAllActive();
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findOne(id) {
        return this.emissionPointService.findOne(+id);
    }
    update(id, updateEmissionPointDto) {
        return this.emissionPointService.update(+id, updateEmissionPointDto);
    }
};
exports.EmissionPointController = EmissionPointController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emission_point_dto_1.CreateEmissionPointDto]),
    __metadata("design:returntype", void 0)
], EmissionPointController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmissionPointController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmissionPointController.prototype, "findAllActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmissionPointController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_emission_point_dto_1.UpdateEmissionPointDto]),
    __metadata("design:returntype", void 0)
], EmissionPointController.prototype, "update", null);
exports.EmissionPointController = EmissionPointController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Controller)('emission-point'),
    __metadata("design:paramtypes", [emission_point_service_1.EmissionPointService])
], EmissionPointController);
//# sourceMappingURL=emission-point.controller.js.map