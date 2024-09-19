import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';
export declare class ProductImageService {
    create(createProductImageDto: CreateProductImageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductImageDto: UpdateProductImageDto): string;
    remove(id: number): string;
}
