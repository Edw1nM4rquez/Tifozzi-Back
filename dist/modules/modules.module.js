"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const email_module_1 = require("./email/email.module");
const country_module_1 = require("./country/country.module");
const state_module_1 = require("./state/state.module");
const city_module_1 = require("./city/city.module");
const module_module_1 = require("./module/module.module");
const permission_module_1 = require("./permission/permission.module");
const profile_module_1 = require("./profile/profile.module");
const department_module_1 = require("./department/department.module");
const role_module_1 = require("./role/role.module");
const company_branch_module_1 = require("./company-branch/company-branch.module");
const emission_point_module_1 = require("./emission-point/emission-point.module");
const signature_module_1 = require("./signature/signature.module");
const email_company_module_1 = require("./email-company/email-company.module");
const email_template_module_1 = require("./email-template/email-template.module");
const product_module_1 = require("./product/product.module");
const category_module_1 = require("./category/category.module");
const ingredient_module_1 = require("./ingredient/ingredient.module");
const price_module_1 = require("./price/price.module");
const image_module_1 = require("./image/image.module");
const log_module_1 = require("./log/log.module");
const address_module_1 = require("./address/address.module");
const order_config_module_1 = require("./order-config/order-config.module");
const order_detail_module_1 = require("./order-detail/order-detail.module");
const order_module_1 = require("./order/order.module");
const product_ingredient_module_1 = require("./product-ingredient/product-ingredient.module");
const product_image_module_1 = require("./product-image/product-image.module");
const product_price_module_1 = require("./product-price/product-price.module");
const company_module_1 = require("./company/company.module");
const cart_module_1 = require("./cart/cart.module");
const cart_detail_module_1 = require("./cart-detail/cart-detail.module");
const zone_module_1 = require("./zone/zone.module");
const table_module_1 = require("./table/table.module");
const reservation_module_1 = require("./reservation/reservation.module");
let ModulesModule = class ModulesModule {
};
exports.ModulesModule = ModulesModule;
exports.ModulesModule = ModulesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            email_module_1.EmailModule,
            country_module_1.CountryModule,
            state_module_1.StateModule,
            city_module_1.CityModule,
            module_module_1.ModuleModule,
            permission_module_1.PermissionModule,
            profile_module_1.ProfileModule,
            department_module_1.DepartmentModule,
            role_module_1.RoleModule,
            company_branch_module_1.CompanyBranchModule,
            emission_point_module_1.EmissionPointModule,
            signature_module_1.SignatureModule,
            email_company_module_1.EmailCompanyModule,
            email_template_module_1.EmailTemplateModule,
            product_module_1.ProductModule,
            category_module_1.CategoryModule,
            ingredient_module_1.IngredientModule,
            price_module_1.PriceModule,
            image_module_1.ImageModule,
            log_module_1.LogModule,
            product_price_module_1.ProductPriceModule,
            product_image_module_1.ProductImageModule,
            product_ingredient_module_1.ProductIngredientModule,
            order_module_1.OrderModule,
            order_detail_module_1.OrderDetailModule,
            order_config_module_1.OrderConfigModule,
            address_module_1.AddressModule,
            company_module_1.CompanyModule,
            cart_module_1.CartModule,
            cart_detail_module_1.CartDetailModule,
            zone_module_1.ZoneModule,
            table_module_1.TableModule,
            reservation_module_1.ReservationModule,
        ],
        controllers: [],
        providers: [],
        exports: [user_module_1.UserModule, auth_module_1.AuthModule, country_module_1.CountryModule],
    })
], ModulesModule);
//# sourceMappingURL=modules.module.js.map