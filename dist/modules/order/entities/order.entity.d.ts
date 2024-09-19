import { Model } from 'sequelize-typescript';
import { Address } from 'src/modules/address/entities/address.entity';
import { CompanyBranch } from 'src/modules/company-branch/entities/company-branch.entity';
import { OrderDetail } from 'src/modules/order-detail/entities/order-detail.entity';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Order extends Model<Order> {
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
    status: string;
    isWeb: boolean;
    userId: number;
    user: User;
    companyBranchId: number;
    companyBranch: CompanyBranch;
    addressId: number;
    address: Address;
    orderDetails: OrderDetail[];
}
