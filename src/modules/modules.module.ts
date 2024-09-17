import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { ModuleModule } from './module/module.module';
import { PermissionModule } from './permission/permission.module';
import { ProfileModule } from './profile/profile.module';
import { DepartmentModule } from './department/department.module';
import { RoleModule } from './role/role.module';
import { CompanyBranchModule } from './company-branch/company-branch.module';
import { EmissionPointModule } from './emission-point/emission-point.module';
import { SignatureModule } from './signature/signature.module';
import { EmailCompanyModule } from './email-company/email-company.module';
import { EmailTemplateModule } from './email-template/email-template.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { PriceModule } from './price/price.module';
import { ImageModule } from './image/image.module';
import { LogModule } from './log/log.module';
import { AddressModule } from './address/address.module';
import { OrderConfigModule } from './order-config/order-config.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { OrderModule } from './order/order.module';
import { ProductIngredientModule } from './product-ingredient/product-ingredient.module';
import { ProductImageModule } from './product-image/product-image.module';
import { ProductPriceModule } from './product-price/product-price.module';
import { CompanyModule } from './company/company.module';
import { CartModule } from './cart/cart.module';
import { CartDetailModule } from './cart-detail/cart-detail.module';
import { ZoneModule } from './zone/zone.module';
import { TableModule } from './table/table.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    EmailModule,
    CountryModule,
    StateModule,
    CityModule,
    ModuleModule,
    PermissionModule,
    ProfileModule,
    DepartmentModule,
    RoleModule,
    CompanyBranchModule,
    EmissionPointModule,
    SignatureModule,
    EmailCompanyModule,
    EmailTemplateModule,
    ProductModule,
    CategoryModule,
    IngredientModule,
    PriceModule,
    ImageModule,
    LogModule,
    ProductPriceModule,
    ProductImageModule,
    ProductIngredientModule,
    OrderModule,
    OrderDetailModule,
    OrderConfigModule,
    AddressModule,
    CompanyModule,
    CartModule,
    CartDetailModule,
    ZoneModule,
    TableModule,
    ReservationModule,
  ],
  controllers: [],
  providers: [],
  exports: [UserModule, AuthModule, CountryModule],
})
export class ModulesModule {}
