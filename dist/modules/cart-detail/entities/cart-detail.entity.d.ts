import { Model } from 'sequelize-typescript';
import { Cart } from 'src/modules/cart/entities/cart.entity';
import { Product } from 'src/modules/product/entities/product.entity';
export declare class CartDetail extends Model<CartDetail> {
    date: Date;
    name: string;
    quantity: number;
    price: string;
    originPrice: string;
    discountPrecent: string;
    discount: string;
    isIva: boolean;
    isInventoried: boolean;
    subtotal: string;
    total: string;
    productId: number;
    product: Product;
    cartId: number;
    cart: Cart;
}
