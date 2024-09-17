import { Table, Column, Model, DataType } from 'sequelize-typescript';
@Table
export class EmailCompany extends Model<EmailCompany> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  host: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  port: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  })
  ssl: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  from: string;
}
