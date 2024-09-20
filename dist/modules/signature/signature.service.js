"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureService = void 0;
const common_1 = require("@nestjs/common");
let SignatureService = class SignatureService {
    create(createSignatureDto) {
        return 'This action adds a new signature';
    }
    findAll() {
        return `This action returns all signature`;
    }
    findOne(id) {
        return `This action returns a #${id} signature`;
    }
    update(id, updateSignatureDto) {
        return `This action updates a #${id} signature`;
    }
    remove(id) {
        return `This action removes a #${id} signature`;
    }
};
exports.SignatureService = SignatureService;
exports.SignatureService = SignatureService = __decorate([
    (0, common_1.Injectable)()
], SignatureService);
//# sourceMappingURL=signature.service.js.map