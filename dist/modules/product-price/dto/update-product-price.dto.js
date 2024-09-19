"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductPriceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_product_price_dto_1 = require("./create-product-price.dto");
class UpdateProductPriceDto extends (0, swagger_1.PartialType)(create_product_price_dto_1.CreateProductPriceDto) {
}
exports.UpdateProductPriceDto = UpdateProductPriceDto;
//# sourceMappingURL=update-product-price.dto.js.map