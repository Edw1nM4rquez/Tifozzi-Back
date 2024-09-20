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
exports.ZoneService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let ZoneService = class ZoneService {
    constructor(zoneRepository) {
        this.zoneRepository = zoneRepository;
    }
    async create(createZoneDto) {
        return await this.zoneRepository.create(createZoneDto);
    }
    async findAll() {
        return await this.zoneRepository.findAll();
    }
    async findActive() {
        return await this.zoneRepository.findAll({ where: { isActive: true } });
    }
    findOne(id) {
        return this.zoneRepository.findByPk(id);
    }
    update(id, updateZoneDto) {
        return this.zoneRepository.update(updateZoneDto, { where: { id } });
    }
    remove(id) {
        return this.zoneRepository.destroy({ where: { id } });
    }
};
exports.ZoneService = ZoneService;
exports.ZoneService = ZoneService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.ZONE_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ZoneService);
//# sourceMappingURL=zone.service.js.map