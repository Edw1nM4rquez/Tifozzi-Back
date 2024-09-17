import { PartialType } from '@nestjs/swagger';
import { CreateProductIngredientDto } from './create-product-ingredient.dto';

export class UpdateProductIngredientDto extends PartialType(CreateProductIngredientDto) {}
