import {
  Table,
  Column,
  Model,
  DataType,
  BeforeSave,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

import { Ingredient } from 'src/modules/ingredient/entities/ingredient.entity';
import { Product } from 'src/modules/product/entities/product.entity';

@Table
export class ProductIngredient extends Model<ProductIngredient> {
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  productId: number;
  @BelongsTo(() => Product)
  product: Product;

  @ForeignKey(() => Ingredient)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  ingredientId: number;
  @BelongsTo(() => Ingredient)
  ingredient: Ingredient;
}
