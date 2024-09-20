"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmissionPointDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_emission_point_dto_1 = require("./create-emission-point.dto");
class UpdateEmissionPointDto extends (0, swagger_1.PartialType)(create_emission_point_dto_1.CreateEmissionPointDto) {
}
exports.UpdateEmissionPointDto = UpdateEmissionPointDto;
//# sourceMappingURL=update-emission-point.dto.js.map