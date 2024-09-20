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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let AddressService = class AddressService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async create(createAddressDto) {
        return await this.addressRepository.create(createAddressDto);
    }
    async findAllByUser(id) {
        return await this.addressRepository.findAll({ where: { userId: id } });
    }
    async updateByUser(id, updateAddressDto) {
        return await this.addressRepository.update(updateAddressDto, {
            where: { id, userId: updateAddressDto.userId },
        });
    }
    async deleteByUser(id) {
        return await this.addressRepository.destroy({
            where: { id },
        });
    }
    async deleteByUserLoged(id, userId) {
        return await this.addressRepository.destroy({
            where: { id, userId },
        });
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.ADDRESS_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], AddressService);
//# sourceMappingURL=address.service.js.map