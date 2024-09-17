import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Address } from 'src/modules/address/entities/address.entity';
import { State } from 'src/modules/state/entities/state.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Table
export class Country extends Model<Country> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  prefix: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @HasMany(() => State)
  players: State[];

  @HasMany(() => Address)
  addresses: Address[];
}
