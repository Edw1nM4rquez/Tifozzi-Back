"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailCompanyModule = void 0;
const common_1 = require("@nestjs/common");
const email_company_service_1 = require("./email-company.service");
const email_company_controller_1 = require("./email-company.controller");
const email_company_entity_1 = require("./entities/email-company.entity");
const constants_1 = require("../../core/constants");
let EmailCompanyModule = class EmailCompanyModule {
};
exports.EmailCompanyModule = EmailCompanyModule;
exports.EmailCompanyModule = EmailCompanyModule = __decorate([
    (0, common_1.Module)({
        controllers: [email_company_controller_1.EmailCompanyController],
        providers: [
            email_company_service_1.EmailCompanyService,
            {
                provide: constants_1.EMAIL_COMPANY_REPOSITORY,
                useValue: email_company_entity_1.EmailCompany,
            },
        ],
        exports: [email_company_service_1.EmailCompanyService],
    })
], EmailCompanyModule);
//# sourceMappingURL=email-company.module.js.map