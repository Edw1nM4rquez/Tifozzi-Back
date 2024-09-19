"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReservationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_reservation_dto_1 = require("./create-reservation.dto");
class UpdateReservationDto extends (0, swagger_1.PartialType)(create_reservation_dto_1.CreateReservationDto) {
}
exports.UpdateReservationDto = UpdateReservationDto;
//# sourceMappingURL=update-reservation.dto.js.map