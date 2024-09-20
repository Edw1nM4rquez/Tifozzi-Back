"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateInputPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateInputPipe = class ValidateInputPipe extends common_1.ValidationPipe {
    async transform(value, metadata) {
        try {
            return await super.transform(value, metadata);
        }
        catch (e) {
            if (e instanceof common_1.BadRequestException) {
                throw new common_1.UnprocessableEntityException(this.handleError(e.message));
            }
        }
    }
    handleError(errors) {
        return errors.map((error) => error.constraints);
    }
};
exports.ValidateInputPipe = ValidateInputPipe;
exports.ValidateInputPipe = ValidateInputPipe = __decorate([
    (0, common_1.Injectable)()
], ValidateInputPipe);
//# sourceMappingURL=validate.pipe.js.map