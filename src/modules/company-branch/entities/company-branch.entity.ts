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
import { Company } from 'src/modules/company/entities/company.entity';
import { Department } from 'src/modules/department/entities/department.entity';
import { EmissionPoint } from 'src/modules/emission-point/entities/emission-point.entity';
import { Image } from 'src/modules/image/entities/image.entity';
import { Signature } from 'src/modules/signature/entities/signature.entity';
@Table
export class CompanyBranch extends Model<CompanyBranch> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  companyName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    // validate: {
    //   max: 13,
    //   min: 10,
    // },
  })
  ruc: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  iva: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  printTicket: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isAccounting: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isRimpe: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isWithholdingAgent: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  resolutionAgent: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  rimpeDescription: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  environment: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  })
  isActive: boolean;

  @ForeignKey(() => Address)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  addressId: number;
  @BelongsTo(() => Address)
  address: Address;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  companyId: number;
  @BelongsTo(() => Company)
  company: Company;

  @ForeignKey(() => EmissionPoint)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  emissionPointId: number;
  @BelongsTo(() => EmissionPoint)
  emissionPoint: EmissionPoint;

  // @ForeignKey(() => Signature)
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: true,
  // })
  // signatureId: number;
  // @BelongsTo(() => Signature)
  // signature: Signature;
}
