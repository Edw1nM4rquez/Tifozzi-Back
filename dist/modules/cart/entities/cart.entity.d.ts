import { Model } from 'sequelize-typescript';
import { CartDetail } from 'src/modules/cart-detail/entities/cart-detail.entity';
import { CompanyBranch } from 'src/modules/company-branch/entities/company-branch.entity';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Cart extends Model<Cart> {
    date: Date;
    observation: string;
    phone: string;
    email: string;
    subtotal: number;
    subIva: number;
    subZero: number;
    ivaPrecent: number;
    iva: number;
    discount: number;
    total: number;
    userId: number;
    user: User;
    companyBranchId: number;
    companyBranch: CompanyBranch;
    cartDetails: CartDetail[];
}
