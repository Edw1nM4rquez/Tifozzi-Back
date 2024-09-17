import { Module } from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { ProductImageController } from './product-image.controller';
import { PRODUCT_IMAGE_REPOSITORY } from 'src/core/constants';
import { ProductImage } from './entities/product-image.entity';

@Module({
  controllers: [ProductImageController],
  providers: [
    ProductImageService,
    {
      provide: PRODUCT_IMAGE_REPOSITORY,
      useValue: ProductImage,
    },
  ],
  exports: [ProductImageService],
})
export class ProductImageModule {}
