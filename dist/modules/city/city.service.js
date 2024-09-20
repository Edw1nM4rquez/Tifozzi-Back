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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const state_entity_1 = require("../state/entities/state.entity");
const country_entity_1 = require("../country/entities/country.entity");
let CityService = class CityService {
    constructor(cityRepository) {
        this.cityRepository = cityRepository;
    }
    async create(createCityDto) {
        return await this.cityRepository.create(createCityDto);
    }
    async findAll() {
        return await this.cityRepository.findAll({
            include: [
                {
                    model: state_entity_1.State,
                    include: [{ model: country_entity_1.Country }],
                },
            ],
        });
    }
    async findAllActive() {
        return await this.cityRepository.findAll({ where: { isActive: true } });
    }
    async findAllByState(id) {
        return await this.cityRepository.findAll({ where: { stateId: id } });
    }
    async findOne(id) {
        return await this.cityRepository.findByPk(id);
    }
    async update(id, updateCityDto) {
        return await this.cityRepository.update(updateCityDto, {
            where: { id },
        });
    }
};
exports.CityService = CityService;
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CITY_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], CityService);
//# sourceMappingURL=city.service.js.map