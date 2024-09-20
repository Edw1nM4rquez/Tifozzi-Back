"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSignatureDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_signature_dto_1 = require("./create-signature.dto");
class UpdateSignatureDto extends (0, swagger_1.PartialType)(create_signature_dto_1.CreateSignatureDto) {
}
exports.UpdateSignatureDto = UpdateSignatureDto;
//# sourceMappingURL=update-signature.dto.js.map