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
import { Category } from 'src/modules/category/entities/category.entity';
import { ProductImage } from 'src/modules/product-image/entities/product-image.entity';
import { ProductIngredient } from 'src/modules/product-ingredient/entities/product-ingredient.entity';
import { ProductPrice } from 'src/modules/product-price/entities/product-price.entity';

@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  slug: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  metaDescription: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  })
  isInventoried: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  })
  isIva: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  })
  isActive: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  })
  isVisibleWeb: boolean;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  stock: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryId: number;
  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => ProductImage)
  productImages: ProductImage[];

  @HasMany(() => ProductIngredient)
  productIngredients: ProductIngredient[];

  @HasMany(() => ProductPrice)
  productPrices: ProductPrice[];
}
