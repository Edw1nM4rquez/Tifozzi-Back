import { CreateProductPriceDto } from './dto/create-product-price.dto';
import { UpdateProductPriceDto } from './dto/update-product-price.dto';
export declare class ProductPriceService {
    create(createProductPriceDto: CreateProductPriceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductPriceDto: UpdateProductPriceDto): string;
    remove(id: number): string;
}
