import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Address } from 'src/modules/address/entities/address.entity';
import { CartDetail } from 'src/modules/cart-detail/entities/cart-detail.entity';
import { CompanyBranch } from 'src/modules/company-branch/entities/company-branch.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Table
export class Cart extends Model<Cart> {
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  observation: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  email: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  })
  subtotal: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  })
  subIva: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  })
  subZero: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  })
  ivaPrecent: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  })
  iva: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  })
  discount: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  })
  total: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => CompanyBranch)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  companyBranchId: number;
  @BelongsTo(() => CompanyBranch)
  companyBranch: CompanyBranch;

  // @ForeignKey(() => Address)
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: true,
  // })
  // addressId: number;
  // @BelongsTo(() => Address)
  // address: Address;

  @HasMany(() => CartDetail)
  cartDetails: CartDetail[];
}
