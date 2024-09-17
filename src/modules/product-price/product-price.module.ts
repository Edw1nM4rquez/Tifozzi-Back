import { Module } from '@nestjs/common';
import { ProductPriceService } from './product-price.service';
import { ProductPriceController } from './product-price.controller';
import { PRODUCT_PRICE_REPOSITORY } from 'src/core/constants';
import { ProductPrice } from './entities/product-price.entity';

@Module({
  controllers: [ProductPriceController],
  providers: [
    ProductPriceService,
    {
      provide: PRODUCT_PRICE_REPOSITORY,
      useValue: ProductPrice,
    },
  ],
})
export class ProductPriceModule {}
