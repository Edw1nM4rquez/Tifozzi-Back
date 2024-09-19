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
exports.CompanyBranchService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const address_entity_1 = require("../address/entities/address.entity");
const sequelize_1 = require("sequelize");
const emission_point_entity_1 = require("../emission-point/entities/emission-point.entity");
let CompanyBranchService = class CompanyBranchService {
    constructor(companyBranchRepository, sequelize) {
        this.companyBranchRepository = companyBranchRepository;
        this.sequelize = sequelize;
    }
    async create(createCompanyBranchDto) {
        const { address, ...companyBranchData } = createCompanyBranchDto;
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            const addressRef = await address_entity_1.Address.create(address, {
                transaction,
            });
            console.log({ addressRef });
            const company = await this.companyBranchRepository.create({ ...companyBranchData, addressId: addressRef.id }, {
                transaction,
            });
            await transaction.commit();
            return company;
        }
        catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        }
    }
    async findAll() {
        return await this.companyBranchRepository.findAll({
            include: [
                {
                    model: address_entity_1.Address,
                },
                {
                    model: emission_point_entity_1.EmissionPoint,
                },
            ],
        });
    }
    async findAllActive() {
        return await this.companyBranchRepository.findAll({
            where: { isActive: true },
        });
    }
    async findOne(id) {
        return await this.companyBranchRepository.findByPk(id, {
            include: [
                {
                    model: address_entity_1.Address,
                },
                {
                    model: emission_point_entity_1.EmissionPoint,
                },
            ],
        });
    }
    async update(id, updateCompanyBranchDto) {
        const { address, ...companyBranchData } = updateCompanyBranchDto;
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            const addressRef = await address_entity_1.Address.update(address, {
                where: { id: address.id },
                transaction,
            });
            console.log({ addressRef });
            const company = await this.companyBranchRepository.update({ ...companyBranchData, addressId: address.id }, {
                where: { id },
                transaction,
            });
            await transaction.commit();
            return company;
        }
        catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        }
    }
    async findBranchByState(stateId) {
        return await this.companyBranchRepository.findOne({
            include: [
                { model: address_entity_1.Address, where: { stateId } },
            ],
        });
    }
};
exports.CompanyBranchService = CompanyBranchService;
exports.CompanyBranchService = CompanyBranchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.COMPANY_BRANCH_REPOSITORY)),
    __param(1, (0, common_1.Inject)('SEQUELIZE')),
    __metadata("design:paramtypes", [Object, sequelize_1.Sequelize])
], CompanyBranchService);
//# sourceMappingURL=company-branch.service.js.map