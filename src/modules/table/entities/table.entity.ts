import {
  Table as TableSequelize,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
} from 'sequelize-typescript';
import { Reservation } from 'src/modules/reservation/entities/reservation.entity';
import { Zone } from 'src/modules/zone/entities/zone.entity';

@TableSequelize
export class Table extends Model<Table> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  number: number;

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

  @ForeignKey(() => Zone)
  @Column
  zoneId: number;

  @BelongsTo(() => Zone)
  zone: Zone;

  @HasMany(() => Reservation)
  reservations: Reservation[];
}
