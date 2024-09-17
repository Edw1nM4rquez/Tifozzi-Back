import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart } from './entities/cart.entity';
import { CART_REPOSITORY } from 'src/core/constants';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [CartController],
  imports: [DatabaseModule],
  providers: [
    CartService,
    {
      provide: CART_REPOSITORY,
      useValue: Cart,
    },
  ],
})
export class CartModule {}
