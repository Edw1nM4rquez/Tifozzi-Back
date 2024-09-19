"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePriceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_price_dto_1 = require("./create-price.dto");
class UpdatePriceDto extends (0, swagger_1.PartialType)(create_price_dto_1.CreatePriceDto) {
}
exports.UpdatePriceDto = UpdatePriceDto;
//# sourceMappingURL=update-price.dto.js.map