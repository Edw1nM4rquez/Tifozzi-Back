import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from 'src/modules/user/entities/user.entity';
import { Country } from 'src/modules/country/entities/country.entity';
import { State } from 'src/modules/state/entities/state.entity';
import { City } from 'src/modules/city/entities/city.entity';
import { Department } from 'src/modules/department/entities/department.entity';
import { Profile } from 'src/modules/profile/entities/profile.entity';
import { Module } from 'src/modules/module/entities/module.entity';
import { Permission } from 'src/modules/permission/entities/permission.entity';
import { Address } from 'src/modules/address/entities/address.entity';
import { Company } from 'src/modules/company/entities/company.entity';
import { Image } from 'src/modules/image/entities/image.entity';
import { CompanyBranch } from 'src/modules/company-branch/entities/company-branch.entity';
import { EmissionPoint } from 'src/modules/emission-point/entities/emission-point.entity';
import { Signature } from 'src/modules/signature/entities/signature.entity';
import { Category } from 'src/modules/category/entities/category.entity';
import { ProductImage } from 'src/modules/product-image/entities/product-image.entity';
import { Product } from 'src/modules/product/entities/product.entity';
import { Ingredient } from 'src/modules/ingredient/entities/ingredient.entity';
import { ProductIngredient } from 'src/modules/product-ingredient/entities/product-ingredient.entity';
import { Log } from 'src/modules/log/entities/log.entity';
import { EmailCompany } from 'src/modules/email-company/entities/email-company.entity';
import { Role } from 'src/modules/role/entities/role.entity';
import { OrderConfig } from 'src/modules/order-config/entities/order-config.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { OrderDetail } from 'src/modules/order-detail/entities/order-detail.entity';
import { ProductPrice } from 'src/modules/product-price/entities/product-price.entity';
import { Price } from 'src/modules/price/entities/price.entity';
import { Cart } from 'src/modules/cart/entities/cart.entity';
import { CartDetail } from 'src/modules/cart-detail/entities/cart-detail.entity';
import { Zone } from 'src/modules/zone/entities/zone.entity';
import { Table } from 'src/modules/table/entities/table.entity';
import { Reservation } from 'src/modules/reservation/entities/reservation.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize({...config,  dialectOptions: {
        ssl: {
          require: true, // Asegura que Railway utilice SSL si está habilitado
          rejectUnauthorized: false // Importante si Railway proporciona certificados autofirmados
        }
      }});
      sequelize.addModels([
        User,
        Country,
        State,
        City,
        Department,
        Profile,
        Module,
        Permission,
        Address,
        Company,
        Image,
        CompanyBranch,
        EmissionPoint,
        Signature,
        Category,
        Product,
        ProductImage,
        Ingredient,
        ProductIngredient,
        Log,
        EmailCompany,
        Role,
        OrderConfig,
        Order,
        OrderDetail,
        ProductPrice,
        Price,
        Cart,
        CartDetail,
        Zone,
        Table,
        Reservation
      ]);
      await sequelize.sync({ alter: true, force: false });
      return sequelize;
    },
  },
];
