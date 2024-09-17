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
import { Image } from 'src/modules/image/entities/image.entity';
import { Product } from 'src/modules/product/entities/product.entity';

@Table
export class ProductImage extends Model<ProductImage> {
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  productId: number;
  @BelongsTo(() => Product)
  product: Product;

  @ForeignKey(() => Image)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  imagenId: number;
  @BelongsTo(() => Image)
  image: Image;
}
