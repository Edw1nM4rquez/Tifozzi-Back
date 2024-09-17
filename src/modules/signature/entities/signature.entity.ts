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
export class Signature extends Model<Signature> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  file: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  expiration: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;


}
