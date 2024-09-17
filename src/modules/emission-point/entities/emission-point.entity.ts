import {
  Table,
  Column,
  Model,
  DataType,
} from 'sequelize-typescript';
import { CompanyBranch } from 'src/modules/company-branch/entities/company-branch.entity';

@Table
export class EmissionPoint extends Model<EmissionPoint> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  serie: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  number: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  })
  isActive: boolean;


  // @HasMany(() => CompanyBranch)
  // companyBranchs: CompanyBranch[];
}
