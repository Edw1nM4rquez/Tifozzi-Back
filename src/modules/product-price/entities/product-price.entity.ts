import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { Price } from 'src/modules/price/entities/price.entity';
import { Product } from 'src/modules/product/entities/product.entity';

@Table
export class ProductPrice extends Model<ProductPrice> {
  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
    defaultValue: 0.0,
  })
  priceVal: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  productId: number;
  @BelongsTo(() => Product)
  product: Product;

  @ForeignKey(() => Price)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  priceId: number;
  @BelongsTo(() => Price)
  price: Price;
}
