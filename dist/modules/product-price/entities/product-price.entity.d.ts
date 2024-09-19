import { Model } from 'sequelize-typescript';
import { Price } from 'src/modules/price/entities/price.entity';
import { Product } from 'src/modules/product/entities/product.entity';
export declare class ProductPrice extends Model<ProductPrice> {
    priceVal: number;
    productId: number;
    product: Product;
    priceId: number;
    price: Price;
}
