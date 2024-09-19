import { Model } from 'sequelize-typescript';
import { Image } from 'src/modules/image/entities/image.entity';
import { Product } from 'src/modules/product/entities/product.entity';
export declare class ProductImage extends Model<ProductImage> {
    productId: number;
    product: Product;
    imagenId: number;
    image: Image;
}
