import { Model } from 'sequelize-typescript';
import { CompanyBranch } from 'src/modules/company-branch/entities/company-branch.entity';
import { ProductPrice } from 'src/modules/product-price/entities/product-price.entity';
export declare class Price extends Model<Price> {
    name: string;
    description: string;
    incrementPercentage: number;
    isActive: boolean;
    companyBranchId: number;
    companyBranch: CompanyBranch;
    productPrices: ProductPrice[];
}
