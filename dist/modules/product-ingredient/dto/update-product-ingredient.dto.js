"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductIngredientDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_product_ingredient_dto_1 = require("./create-product-ingredient.dto");
class UpdateProductIngredientDto extends (0, swagger_1.PartialType)(create_product_ingredient_dto_1.CreateProductIngredientDto) {
}
exports.UpdateProductIngredientDto = UpdateProductIngredientDto;
//# sourceMappingURL=update-product-ingredient.dto.js.map