import { Model } from 'sequelize-typescript';
import { Address } from 'src/modules/address/entities/address.entity';
import { Company } from 'src/modules/company/entities/company.entity';
import { EmissionPoint } from 'src/modules/emission-point/entities/emission-point.entity';
export declare class CompanyBranch extends Model<CompanyBranch> {
    companyName: string;
    ruc: string;
    iva: number;
    printTicket: boolean;
    isAccounting: boolean;
    isRimpe: boolean;
    isWithholdingAgent: boolean;
    resolutionAgent: string;
    rimpeDescription: string;
    environment: number;
    isActive: boolean;
    addressId: number;
    address: Address;
    companyId: number;
    company: Company;
    emissionPointId: number;
    emissionPoint: EmissionPoint;
}
