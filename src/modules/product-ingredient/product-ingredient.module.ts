import { Module } from '@nestjs/common';
import { ProductIngredientService } from './product-ingredient.service';
import { ProductIngredientController } from './product-ingredient.controller';
import { ProductIngredient } from './entities/product-ingredient.entity';
import { PRODUCT_INGREDIENT_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [ProductIngredientController],
  providers: [
    ProductIngredientService,
    {
      provide: PRODUCT_INGREDIENT_REPOSITORY,
      useValue: ProductIngredient,
    },
  ],
  exports: [ProductIngredientService],
})
export class ProductIngredientModule {}
