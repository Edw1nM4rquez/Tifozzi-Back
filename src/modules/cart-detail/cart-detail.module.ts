import { Module } from '@nestjs/common';
import { CartDetailService } from './cart-detail.service';
import { CartDetailController } from './cart-detail.controller';
import { CART_DETAIL_REPOSITORY } from 'src/core/constants';
import { CartDetail } from './entities/cart-detail.entity';

@Module({
  controllers: [CartDetailController],
  providers: [
    CartDetailService,
    {
      provide: CART_DETAIL_REPOSITORY,
      useValue: CartDetail,
    },
  ],
})
export class CartDetailModule {}
