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
import { CompanyBranch } from 'src/modules/company-branch/entities/company-branch.entity';
import { OrderDetail } from 'src/modules/order-detail/entities/order-detail.entity';
import { User } from 'src/modules/user/entities/user.entity';
@Table
export class Order extends Model<Order> {
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
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
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

  @Column({
    type: DataType.ENUM,
    values: ['REGISTERED', 'PROCESSING', 'PREPARING', 'BILLED'],
    allowNull: false,
    defaultValue: 'REGISTERED',
  })
  status: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isWeb: boolean;

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

  @ForeignKey(() => Address)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  addressId: number;
  @BelongsTo(() => Address)
  address: Address;

  @HasMany(() => OrderDetail)
  orderDetails: OrderDetail[];
}
