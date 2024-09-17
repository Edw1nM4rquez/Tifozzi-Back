import {
  Table,
  Column,
  Model,
  DataType,
} from 'sequelize-typescript';
@Table
export class Log extends Model<Log> {
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  message: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  module: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  class: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  method: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  data: string;
}
