"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartDetailService = void 0;
const common_1 = require("@nestjs/common");
let CartDetailService = class CartDetailService {
    create(createCartDetailDto) {
        return 'This action adds a new cartDetail';
    }
    findAll() {
        return `This action returns all cartDetail`;
    }
    findOne(id) {
        return `This action returns a #${id} cartDetail`;
    }
    update(id, updateCartDetailDto) {
        return `This action updates a #${id} cartDetail`;
    }
    remove(id) {
        return `This action removes a #${id} cartDetail`;
    }
};
exports.CartDetailService = CartDetailService;
exports.CartDetailService = CartDetailService = __decorate([
    (0, common_1.Injectable)()
], CartDetailService);
//# sourceMappingURL=cart-detail.service.js.map