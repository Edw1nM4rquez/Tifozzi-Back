"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyBranchModule = void 0;
const common_1 = require("@nestjs/common");
const company_branch_service_1 = require("./company-branch.service");
const company_branch_controller_1 = require("./company-branch.controller");
const company_branch_entity_1 = require("./entities/company-branch.entity");
const constants_1 = require("../../core/constants");
const database_module_1 = require("../../core/database/database.module");
const address_module_1 = require("../address/address.module");
let CompanyBranchModule = class CompanyBranchModule {
};
exports.CompanyBranchModule = CompanyBranchModule;
exports.CompanyBranchModule = CompanyBranchModule = __decorate([
    (0, common_1.Module)({
        controllers: [company_branch_controller_1.CompanyBranchController],
        imports: [address_module_1.AddressModule, database_module_1.DatabaseModule],
        providers: [
            company_branch_service_1.CompanyBranchService,
            {
                provide: constants_1.COMPANY_BRANCH_REPOSITORY,
                useValue: company_branch_entity_1.CompanyBranch,
            },
        ],
    })
], CompanyBranchModule);
//# sourceMappingURL=company-branch.module.js.map