import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { Product } from './entities/product.entity';
import { IngredientModule } from '../ingredient/ingredient.module';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [ProductController],
  imports: [IngredientModule, DatabaseModule],
  providers: [
    ProductService,
    {
      provide: PRODUCT_REPOSITORY,
      useValue: Product,
    },
  ],
  //exports: [ProductService],
})
export class ProductModule {}
