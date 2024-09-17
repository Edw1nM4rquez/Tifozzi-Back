import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { City } from 'src/modules/city/entities/city.entity';
import { Country } from 'src/modules/country/entities/country.entity';
import { State } from 'src/modules/state/entities/state.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Table
export class Address extends Model<Address> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isPrimary: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @ForeignKey(() => Country)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  countryId: number;
  @BelongsTo(() => Country)
  country: Country;

  @ForeignKey(() => State)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stateId: number;
  @BelongsTo(() => State)
  state: State;

  @ForeignKey(() => City)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cityId: number;
  @BelongsTo(() => City)
  city: City;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  userId: number;
  @BelongsTo(() => User)
  user: User;
}
