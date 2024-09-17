import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ORDER_REPOSITORY } from 'src/core/constants';
import { Order } from './entities/order.entity';
import { DatabaseModule } from 'src/core/database/database.module';
import { OrderDetailModule } from '../order-detail/order-detail.module';
import { CompanyBranchModule } from '../company-branch/company-branch.module';
import { ProductModule } from '../product/product.module';
import { EmissionPointModule } from '../emission-point/emission-point.module';

@Module({
  controllers: [OrderController],
  imports: [
    OrderDetailModule,
    CompanyBranchModule,
    EmissionPointModule,
    ProductModule,
    DatabaseModule,
  ],
  providers: [
    OrderService,
    {
      provide: ORDER_REPOSITORY,
      useValue: Order,
    },
  ],
})
export class OrderModule {}
