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
import { City } from 'src/modules/city/entities/city.entity';
import { Country } from 'src/modules/country/entities/country.entity';
@Table
export class State extends Model<State> {
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

  @ForeignKey(() => Country)
  @Column
  countryId: number;

  @BelongsTo(() => Country)
  country: Country;

  @HasMany(() => City)
  cities: City[];

  @HasMany(() => Address)
  addresses: Address[];
}
