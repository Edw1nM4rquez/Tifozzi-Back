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
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const table_entity_1 = require("../table/entities/table.entity");
const zone_entity_1 = require("../zone/entities/zone.entity");
const sequelize_1 = require("sequelize");
let ReservationService = class ReservationService {
    constructor(reservationRepository) {
        this.reservationRepository = reservationRepository;
    }
    async create(createReservationDto) {
        const { date, tableId } = createReservationDto;
        const reservationDate = new Date(date);
        const startTime = new Date(reservationDate);
        startTime.setHours(reservationDate.getHours() - 1);
        const endTime = new Date(reservationDate);
        endTime.setHours(reservationDate.getHours() + 1);
        const existingReservations = await this.reservationRepository.findAll({
            where: {
                tableId: tableId,
                date: {
                    [sequelize_1.Op.between]: [startTime, endTime],
                },
            },
        });
        if (existingReservations.length > 0) {
            throw new common_1.BadRequestException('The table is not available in the selected time range.');
        }
        return this.reservationRepository.create(createReservationDto);
    }
    async findAll(dateInit, dateEnd) {
        const adjustedDateInit = new Date(`${dateInit}T00:00:00.000Z`);
        const adjustedDateEnd = new Date(`${dateEnd}T23:59:59.999Z`);
        return this.reservationRepository.findAll({
            where: {
                date: {
                    [sequelize_1.Op.between]: [adjustedDateInit, adjustedDateEnd],
                },
            },
        });
    }
    findOne(id) {
        return this.reservationRepository.findByPk(id, {
            include: [
                {
                    model: table_entity_1.Table,
                    include: [{ model: zone_entity_1.Zone }],
                },
            ],
        });
    }
    update(id, updateReservationDto) {
        return this.reservationRepository.update(updateReservationDto, {
            where: { id },
        });
    }
    remove(id) {
        return this.reservationRepository.destroy({ where: { id } });
    }
    getMyReservations(userId) {
        return this.reservationRepository.findAll({
            where: {
                userId,
            },
            include: [
                {
                    model: table_entity_1.Table,
                    include: [{ model: zone_entity_1.Zone }],
                },
            ],
        });
    }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.RESERVATION_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], ReservationService);
//# sourceMappingURL=reservation.service.js.map