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
import { CompanyBranch } from 'src/modules/company-branch/entities/company-branch.entity';
import { ProductImage } from 'src/modules/product-image/entities/product-image.entity';
import { ProductIngredient } from 'src/modules/product-ingredient/entities/product-ingredient.entity';
import { ProductPrice } from 'src/modules/product-price/entities/product-price.entity';
import { Product } from 'src/modules/product/entities/product.entity';

@Table
export class Price extends Model<Price> {
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
    type: DataType.FLOAT,
    allowNull: true,
    defaultValue: 0.0,
  })
  incrementPercentage: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  })
  isActive: boolean;

  @ForeignKey(() => CompanyBranch)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  companyBranchId: number;
  @BelongsTo(() => CompanyBranch)
  companyBranch: CompanyBranch;

  @HasMany(() => ProductPrice)
  productPrices: ProductPrice[];

}
