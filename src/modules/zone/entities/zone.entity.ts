import { Table, Column, DataType, HasMany, Model } from 'sequelize-typescript';
import { Table as TableEntity } from 'src/modules/table/entities/table.entity';

@Table
export class Zone extends Model<Zone> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @HasMany(() => TableEntity)
  tables: TableEntity[];
}
