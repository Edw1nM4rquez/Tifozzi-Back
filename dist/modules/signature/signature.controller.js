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
exports.SignatureController = void 0;
const common_1 = require("@nestjs/common");
const signature_service_1 = require("./signature.service");
const create_signature_dto_1 = require("./dto/create-signature.dto");
const update_signature_dto_1 = require("./dto/update-signature.dto");
let SignatureController = class SignatureController {
    constructor(signatureService) {
        this.signatureService = signatureService;
    }
    create(createSignatureDto) {
        return this.signatureService.create(createSignatureDto);
    }
    findAll() {
        return this.signatureService.findAll();
    }
    findOne(id) {
        return this.signatureService.findOne(+id);
    }
    update(id, updateSignatureDto) {
        return this.signatureService.update(+id, updateSignatureDto);
    }
    remove(id) {
        return this.signatureService.remove(+id);
    }
};
exports.SignatureController = SignatureController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signature_dto_1.CreateSignatureDto]),
    __metadata("design:returntype", void 0)
], SignatureController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SignatureController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SignatureController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_signature_dto_1.UpdateSignatureDto]),
    __metadata("design:returntype", void 0)
], SignatureController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SignatureController.prototype, "remove", null);
exports.SignatureController = SignatureController = __decorate([
    (0, common_1.Controller)('signature'),
    __metadata("design:paramtypes", [signature_service_1.SignatureService])
], SignatureController);
//# sourceMappingURL=signature.controller.js.map