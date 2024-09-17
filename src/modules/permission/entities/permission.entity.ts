import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Module } from 'src/modules/module/entities/module.entity';
import { Profile } from 'src/modules/profile/entities/profile.entity';
@Table
export class Permission extends Model<Permission> {
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  access: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  create: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  edit: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  delete: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  print: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  report: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  others: boolean;

  @ForeignKey(() => Module)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  moduleId: number;
  @BelongsTo(() => Module)
  module: Module;

  @ForeignKey(() => Profile)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  profileId: number;
  @BelongsTo(() => Profile)
  profile: Profile;
}
