import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Address } from 'src/modules/address/entities/address.entity';
import { State } from 'src/modules/state/entities/state.entity';
@Table
export class City extends Model<City> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @ForeignKey(() => State)
  @Column
  stateId: number;

  @BelongsTo(() => State)
  state: State;

  @HasMany(() => Address)
  addresses: Address[];
}
