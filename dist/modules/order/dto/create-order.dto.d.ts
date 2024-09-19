export declare class CreateOrderDto {
    date: Date;
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
    readonly status: string;
    readonly userId: number;
    readonly companyBranchId: number;
    readonly addressId: number;
    readonly detail: any[];
}
