import { ProductPriceService } from './product-price.service';
import { CreateProductPriceDto } from './dto/create-product-price.dto';
import { UpdateProductPriceDto } from './dto/update-product-price.dto';
export declare class ProductPriceController {
    private readonly productPriceService;
    constructor(productPriceService: ProductPriceService);
    create(createProductPriceDto: CreateProductPriceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProductPriceDto: UpdateProductPriceDto): string;
    remove(id: string): string;
}
