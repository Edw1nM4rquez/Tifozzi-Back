import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';

@Table
export class Image extends Model<Image> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  img: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  alt: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  size: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  length: string;
}
