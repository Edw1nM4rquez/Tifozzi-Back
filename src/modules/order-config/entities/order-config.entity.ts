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
export class OrderConfig extends Model<OrderConfig> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 2,
  })
  decimals: number;
}
