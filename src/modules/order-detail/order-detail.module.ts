import { Module } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { OrderDetailController } from './order-detail.controller';
import { OrderDetail } from './entities/order-detail.entity';
import { ORDER_DETAIL_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [OrderDetailController],
  providers: [
    OrderDetailService,
    {
      provide: ORDER_DETAIL_REPOSITORY,
      useValue: OrderDetail,
    },
  ],
  //exports: [OrderDetailService],
})
export class OrderDetailModule {}
