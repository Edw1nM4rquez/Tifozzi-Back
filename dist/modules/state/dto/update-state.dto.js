"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_state_dto_1 = require("./create-state.dto");
class UpdateStateDto extends (0, swagger_1.PartialType)(create_state_dto_1.CreateStateDto) {
}
exports.UpdateStateDto = UpdateStateDto;
//# sourceMappingURL=update-state.dto.js.map