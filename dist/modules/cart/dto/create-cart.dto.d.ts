import { CartDetail } from 'src/modules/cart-detail/entities/cart-detail.entity';
export declare class CreateCartDto {
    id: number;
    readonly date: Date;
    readonly observation: string;
    readonly phone: string;
    readonly email: string;
    readonly subtotal: number;
    readonly subIva: number;
    readonly subZero: number;
    readonly ivaPrecent: number;
    readonly iva: number;
    readonly discount: number;
    readonly total: number;
    readonly userId: number;
    readonly companyBranchId: number;
    readonly detail: CartDetail[];
}
