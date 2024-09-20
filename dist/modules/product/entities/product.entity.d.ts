import { Model } from 'sequelize-typescript';
import { Category } from 'src/modules/category/entities/category.entity';
import { ProductImage } from 'src/modules/product-image/entities/product-image.entity';
import { ProductIngredient } from 'src/modules/product-ingredient/entities/product-ingredient.entity';
import { ProductPrice } from 'src/modules/product-price/entities/product-price.entity';
export declare class Product extends Model<Product> {
    code: string;
    name: string;
    description: string;
    slug: string;
    metaDescription: string;
    isInventoried: boolean;
    isIva: boolean;
    isActive: boolean;
    isVisibleWeb: boolean;
    price: number;
    stock: number;
    categoryId: number;
    category: Category;
    productImages: ProductImage[];
    productIngredients: ProductIngredient[];
    productPrices: ProductPrice[];
}
