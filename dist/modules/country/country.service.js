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
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
let CountryService = class CountryService {
    constructor(countryRepository) {
        this.countryRepository = countryRepository;
    }
    async create(createCountryDto) {
        return await this.countryRepository.create(createCountryDto);
    }
    async findAll() {
        return await this.countryRepository.findAll();
    }
    async findAllActive() {
        return await this.countryRepository.findAll({ where: { isActive: true } });
    }
    async findOne(id) {
        console.log("findOne", id);
        return await this.countryRepository.findByPk(id);
    }
    async update(id, updateCountryDto) {
        return await this.countryRepository.update(updateCountryDto, {
            where: { id },
        });
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.COUNTRY_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], CountryService);
//# sourceMappingURL=country.service.js.map