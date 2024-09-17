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
export class Category extends Model<Category> {
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
    unique: true
  })
  slug: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  metaDescription: string;

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

  @ForeignKey(() => Image)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  imagenId: number;
  @BelongsTo(() => Image)
  image: Image;

  @HasMany(() => Product)
  products: Product[];
}
