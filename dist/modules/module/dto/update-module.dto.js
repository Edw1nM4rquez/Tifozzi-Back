"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateModuleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_module_dto_1 = require("./create-module.dto");
class UpdateModuleDto extends (0, swagger_1.PartialType)(create_module_dto_1.CreateModuleDto) {
}
exports.UpdateModuleDto = UpdateModuleDto;
//# sourceMappingURL=update-module.dto.js.map