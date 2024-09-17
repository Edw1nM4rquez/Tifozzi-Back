import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { CompanyBranch } from 'src/modules/company-branch/entities/company-branch.entity';
import { Department } from 'src/modules/department/entities/department.entity';
import { EmailCompany } from 'src/modules/email-company/entities/email-company.entity';
import { Image } from 'src/modules/image/entities/image.entity';
@Table
export class Company extends Model<Department> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  useEmailServer: boolean;

  @ForeignKey(() => Image)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  imagenId: number;
  @BelongsTo(() => Image)
  image: Image;

  @ForeignKey(() => EmailCompany)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  emailCompanyId: number;
  @BelongsTo(() => EmailCompany)
  emailCompany: EmailCompany;

  @HasMany(() => CompanyBranch)
  companyBranchs: CompanyBranch[];
}
