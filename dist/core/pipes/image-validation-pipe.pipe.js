"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const mime = require("mime-types");
let ImageValidationPipe = class ImageValidationPipe {
    async transform(value) {
        console.log('pipe value', value);
        if (!value || value.length === 0) {
            throw new common_1.BadRequestException('No files were uploaded.');
        }
        const isValidImages = value.every((file) => {
            const mimeType = mime.lookup(file.originalname);
            return mimeType && mimeType.startsWith('image');
        });
        if (!isValidImages) {
            throw new common_1.BadRequestException('Uploaded files must be images.');
        }
        return value;
    }
};
exports.ImageValidationPipe = ImageValidationPipe;
exports.ImageValidationPipe = ImageValidationPipe = __decorate([
    (0, common_1.Injectable)()
], ImageValidationPipe);
//# sourceMappingURL=image-validation-pipe.pipe.js.map