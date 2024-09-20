"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("../constants");
const database_config_1 = require("./database.config");
const user_entity_1 = require("../../modules/user/entities/user.entity");
const country_entity_1 = require("../../modules/country/entities/country.entity");
const state_entity_1 = require("../../modules/state/entities/state.entity");
const city_entity_1 = require("../../modules/city/entities/city.entity");
const department_entity_1 = require("../../modules/department/entities/department.entity");
const profile_entity_1 = require("../../modules/profile/entities/profile.entity");
const module_entity_1 = require("../../modules/module/entities/module.entity");
const permission_entity_1 = require("../../modules/permission/entities/permission.entity");
const address_entity_1 = require("../../modules/address/entities/address.entity");
const company_entity_1 = require("../../modules/company/entities/company.entity");
const image_entity_1 = require("../../modules/image/entities/image.entity");
const company_branch_entity_1 = require("../../modules/company-branch/entities/company-branch.entity");
const emission_point_entity_1 = require("../../modules/emission-point/entities/emission-point.entity");
const signature_entity_1 = require("../../modules/signature/entities/signature.entity");
const category_entity_1 = require("../../modules/category/entities/category.entity");
const product_image_entity_1 = require("../../modules/product-image/entities/product-image.entity");
const product_entity_1 = require("../../modules/product/entities/product.entity");
const ingredient_entity_1 = require("../../modules/ingredient/entities/ingredient.entity");
const product_ingredient_entity_1 = require("../../modules/product-ingredient/entities/product-ingredient.entity");
const log_entity_1 = require("../../modules/log/entities/log.entity");
const email_company_entity_1 = require("../../modules/email-company/entities/email-company.entity");
const role_entity_1 = require("../../modules/role/entities/role.entity");
const order_config_entity_1 = require("../../modules/order-config/entities/order-config.entity");
const order_entity_1 = require("../../modules/order/entities/order.entity");
const order_detail_entity_1 = require("../../modules/order-detail/entities/order-detail.entity");
const product_price_entity_1 = require("../../modules/product-price/entities/product-price.entity");
const price_entity_1 = require("../../modules/price/entities/price.entity");
const cart_entity_1 = require("../../modules/cart/entities/cart.entity");
const cart_detail_entity_1 = require("../../modules/cart-detail/entities/cart-detail.entity");
const zone_entity_1 = require("../../modules/zone/entities/zone.entity");
const table_entity_1 = require("../../modules/table/entities/table.entity");
const reservation_entity_1 = require("../../modules/reservation/entities/reservation.entity");
exports.databaseProviders = [
    {
        provide: constants_1.SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case constants_1.DEVELOPMENT:
                    config = database_config_1.databaseConfig.development;
                    break;
                case constants_1.TEST:
                    config = database_config_1.databaseConfig.test;
                    break;
                case constants_1.PRODUCTION:
                    config = database_config_1.databaseConfig.production;
                    break;
                default:
                    config = database_config_1.databaseConfig.development;
            }
            const sequelize = new sequelize_typescript_1.Sequelize(config);
            sequelize.addModels([
                user_entity_1.User,
                country_entity_1.Country,
                state_entity_1.State,
                city_entity_1.City,
                department_entity_1.Department,
                profile_entity_1.Profile,
                module_entity_1.Module,
                permission_entity_1.Permission,
                address_entity_1.Address,
                company_entity_1.Company,
                image_entity_1.Image,
                company_branch_entity_1.CompanyBranch,
                emission_point_entity_1.EmissionPoint,
                signature_entity_1.Signature,
                category_entity_1.Category,
                product_entity_1.Product,
                product_image_entity_1.ProductImage,
                ingredient_entity_1.Ingredient,
                product_ingredient_entity_1.ProductIngredient,
                log_entity_1.Log,
                email_company_entity_1.EmailCompany,
                role_entity_1.Role,
                order_config_entity_1.OrderConfig,
                order_entity_1.Order,
                order_detail_entity_1.OrderDetail,
                product_price_entity_1.ProductPrice,
                price_entity_1.Price,
                cart_entity_1.Cart,
                cart_detail_entity_1.CartDetail,
                zone_entity_1.Zone,
                table_entity_1.Table,
                reservation_entity_1.Reservation
            ]);
            await sequelize.sync({ alter: true, force: false });
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map