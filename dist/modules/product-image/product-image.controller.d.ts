import { ProductImageService } from './product-image.service';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';
export declare class ProductImageController {
    private readonly productImageService;
    constructor(productImageService: ProductImageService);
    create(createProductImageDto: CreateProductImageDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProductImageDto: UpdateProductImageDto): string;
    remove(id: string): string;
}
