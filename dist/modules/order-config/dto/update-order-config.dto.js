"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderConfigDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_order_config_dto_1 = require("./create-order-config.dto");
class UpdateOrderConfigDto extends (0, swagger_1.PartialType)(create_order_config_dto_1.CreateOrderConfigDto) {
}
exports.UpdateOrderConfigDto = UpdateOrderConfigDto;
//# sourceMappingURL=update-order-config.dto.js.map