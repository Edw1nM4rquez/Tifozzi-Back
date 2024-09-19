import { Model } from 'sequelize-typescript';
import { Image } from 'src/modules/image/entities/image.entity';
import { Product } from 'src/modules/product/entities/product.entity';
export declare class Category extends Model<Category> {
    name: string;
    description: string;
    slug: string;
    metaDescription: string;
    isActive: boolean;
    isVisibleWeb: boolean;
    imagenId: number;
    image: Image;
    products: Product[];
}
