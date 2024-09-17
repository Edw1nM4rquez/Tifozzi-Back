import { DataTypes } from 'sequelize';
import {
  Table,
  Column,
  Model,
  DataType,
  BeforeSave,
  ForeignKey,
  BelongsTo,
  HasMany,
  BeforeUpdate,
} from 'sequelize-typescript';
import { Address } from 'src/modules/address/entities/address.entity';
import { Department } from 'src/modules/department/entities/department.entity';
import { Image } from 'src/modules/image/entities/image.entity';
import { Profile } from 'src/modules/profile/entities/profile.entity';
import { Role } from 'src/modules/role/entities/role.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  })
  uuid: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  fullName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  ruc: string;

  // @Column({
  //   type: DataType.STRING,
  //   allowNull: false,
  // })
  // address: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  dateOfBirth: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  accountVerified: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @Column({
    type: DataType.ENUM,
    values: ['M', 'F', 'O'],
    allowNull: false,
  })
  gender: string;

  @Column({
    type: DataType.ENUM,
    values: ['CLIENT', 'ADMIN'],
    allowNull: false,
    defaultValue: 'CLIENT',
  })
  type: string;

  // @ForeignKey(() => Country)
  // @Column
  // countryId: number;
  // @BelongsTo(() => Country)
  // country: Country;

  // @ForeignKey(() => State)
  // @Column
  // stateId: number;
  // @BelongsTo(() => State)
  // state: State;

  // @ForeignKey(() => City)
  // @Column
  // cityId: number;
  // @BelongsTo(() => City)
  // city: City;

  @ForeignKey(() => Department)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  departmentId: number;
  @BelongsTo(() => Department)
  department: Department;

  @ForeignKey(() => Profile)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  profileId: number;
  @BelongsTo(() => Profile)
  profile: Profile;

  @ForeignKey(() => Image)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  imageId: number;
  @BelongsTo(() => Image)
  image: Image;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  roleId: number;
  @BelongsTo(() => Role)
  role: Role;

  @HasMany(() => Address)
  addresses: Address[];

  // Hooks
  @BeforeSave
  @BeforeUpdate
  static updateFullName(instance: User) {
    console.log("enter hook updateFullName", instance);
    instance.fullName = `${instance.name} ${instance.surname}`;
  }
}
