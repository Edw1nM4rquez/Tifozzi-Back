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
exports.StateService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const jwt_auth_guard_1 = require("../../core/guards/jwt-auth.guard");
const is_admin_guard_1 = require("../../core/guards/is-admin.guard");
const country_entity_1 = require("../country/entities/country.entity");
let StateService = class StateService {
    constructor(stateRepository) {
        this.stateRepository = stateRepository;
    }
    async create(createStateDto) {
        return await this.stateRepository.create(createStateDto);
    }
    async findAll() {
        return await this.stateRepository.findAll({
            include: [
                {
                    model: country_entity_1.Country,
                },
            ],
        });
    }
    async findAllActive() {
        return await this.stateRepository.findAll({ where: { isActive: true } });
    }
    async findOne(id) {
        return await this.stateRepository.findByPk(id);
    }
    async update(id, updateStateDto) {
        return await this.stateRepository.update(updateStateDto, {
            where: { id },
        });
    }
};
exports.StateService = StateService;
exports.StateService = StateService = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.STATE_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], StateService);
//# sourceMappingURL=state.service.js.map