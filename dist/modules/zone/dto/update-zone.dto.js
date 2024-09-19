"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateZoneDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_zone_dto_1 = require("./create-zone.dto");
class UpdateZoneDto extends (0, swagger_1.PartialType)(create_zone_dto_1.CreateZoneDto) {
}
exports.UpdateZoneDto = UpdateZoneDto;
//# sourceMappingURL=update-zone.dto.js.map