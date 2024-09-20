import { Model } from 'sequelize-typescript';
import { CompanyBranch } from 'src/modules/company-branch/entities/company-branch.entity';
import { Department } from 'src/modules/department/entities/department.entity';
import { EmailCompany } from 'src/modules/email-company/entities/email-company.entity';
import { Image } from 'src/modules/image/entities/image.entity';
export declare class Company extends Model<Department> {
    name: string;
    useEmailServer: boolean;
    imagenId: number;
    image: Image;
    emailCompanyId: number;
    emailCompany: EmailCompany;
    companyBranchs: CompanyBranch[];
}
