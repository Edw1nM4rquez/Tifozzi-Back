"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const image_service_1 = require("./image.service");
const update_image_dto_1 = require("./dto/update-image.dto");
const platform_express_1 = require("@nestjs/platform-express");
const image_validation_pipe_pipe_1 = require("../../core/pipes/image-validation-pipe.pipe");
const jwt_auth_guard_1 = require("../../core/guards/jwt-auth.guard");
const is_admin_guard_1 = require("../../core/guards/is-admin.guard");
let ImageController = class ImageController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    create(files) {
        console.log('upload', files);
        return this.imageService.create(files);
    }
    findAll(q) {
        return this.imageService.findAll(q);
    }
    findOne(id) {
        return this.imageService.findOne(+id);
    }
    update(id, updateImageDto) {
        return this.imageService.update(+id, updateImageDto);
    }
    remove(id) {
        return this.imageService.remove(+id);
    }
};
exports.ImageController = ImageController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_1.UploadedFiles)(image_validation_pipe_pipe_1.ImageValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_image_dto_1.UpdateImageDto]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "remove", null);
exports.ImageController = ImageController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, is_admin_guard_1.IsAdminGuard),
    (0, common_1.Controller)('image'),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], ImageController);
//# sourceMappingURL=image.controller.js.map