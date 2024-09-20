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
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const address_service_1 = require("./address.service");
const create_address_dto_1 = require("./dto/create-address.dto");
const jwt_auth_guard_1 = require("../../core/guards/jwt-auth.guard");
const is_admin_guard_1 = require("../../core/guards/is-admin.guard");
const is_client_guard_1 = require("../../core/guards/is-client.guard");
const update_address_dto_1 = require("./dto/update-address.dto");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    create(createAddressDto) {
        return this.addressService.create(createAddressDto);
    }
    findAllByUser(id) {
        try {
            return this.addressService.findAllByUser(+id);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.NOT_FOUND);
        }
    }
    updateByUser(id, createAddressDto) {
        try {
            return this.addressService.updateByUser(+id, createAddressDto);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.NOT_FOUND);
        }
    }
    deleteByUser(id) {
        try {
            return this.addressService.deleteByUser(+id);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.NOT_FOUND);
        }
    }
    createMe(req, createAddressDto) {
        createAddressDto.userId = req.user.id;
        return this.addressService.create(createAddressDto);
    }
    findAllByMe(req) {
        try {
            return this.addressService.findAllByUser(+req.user.id);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.NOT_FOUND);
        }
    }
    updateByMe(req, id, updateAddressDto) {
        try {
            updateAddressDto.userId = req.user.id;
            return this.addressService.updateByUser(+id, updateAddressDto);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.NOT_FOUND);
        }
    }
    deleteByMe(req, id) {
        try {
            return this.addressService.deleteByUserLoged(+id, +req.user.id);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.AddressController = AddressController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_address_dto_1.CreateAddressDto]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findAllByUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Put)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_address_dto_1.CreateAddressDto]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "updateByUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Delete)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "deleteByUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_client_guard_1.IsClientGuard),
    (0, common_1.Post)('/me'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_address_dto_1.CreateAddressDto]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "createMe", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_client_guard_1.IsClientGuard),
    (0, common_1.Get)('/me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findAllByMe", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_client_guard_1.IsClientGuard),
    (0, common_1.Put)('/me/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_address_dto_1.UpdateAddressDto]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "updateByMe", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_client_guard_1.IsClientGuard),
    (0, common_1.Delete)('/me/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "deleteByMe", null);
exports.AddressController = AddressController = __decorate([
    (0, common_1.Controller)('address'),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], AddressController);
//# sourceMappingURL=address.controller.js.map