"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
let DepartmentService = class DepartmentService {
    create(createDepartmentDto) {
        return 'This action adds a new department';
    }
    findAll() {
        return `This action returns all department`;
    }
    findOne(id) {
        return `This action returns a #${id} department`;
    }
    update(id, updateDepartmentDto) {
        return `This action updates a #${id} department`;
    }
    remove(id) {
        return `This action removes a #${id} department`;
    }
};
exports.DepartmentService = DepartmentService;
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)()
], DepartmentService);
//# sourceMappingURL=department.service.js.map