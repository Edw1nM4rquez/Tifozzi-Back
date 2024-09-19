import { Model } from 'sequelize-typescript';
import { Ingredient } from 'src/modules/ingredient/entities/ingredient.entity';
import { Product } from 'src/modules/product/entities/product.entity';
export declare class ProductIngredient extends Model<ProductIngredient> {
    productId: number;
    product: Product;
    ingredientId: number;
    ingredient: Ingredient;
}
