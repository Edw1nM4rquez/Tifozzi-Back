import { Model } from 'sequelize-typescript';
import { Order } from 'src/modules/order/entities/order.entity';
import { Product } from 'src/modules/product/entities/product.entity';
export declare class OrderDetail extends Model<OrderDetail> {
    name: string;
    description: string;
    quantity: number;
    price: number;
    originPrice: number;
    discountPrecent: number;
    discount: number;
    isIva: boolean;
    isInventoried: boolean;
    subtotal: number;
    total: number;
    productId: number;
    product: Product;
    orderId: number;
    order: Order;
}
