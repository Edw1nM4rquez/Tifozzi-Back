import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { Ingredient } from './entities/ingredient.entity';
import { INGREDIENT_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [IngredientController],
  providers: [
    IngredientService,
    {
      provide: INGREDIENT_REPOSITORY,
      useValue: Ingredient,
    },
  ],
  exports: [IngredientService],
})
export class IngredientModule {}
