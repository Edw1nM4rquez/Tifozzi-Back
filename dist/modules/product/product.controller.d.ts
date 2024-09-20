import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    findAll(q?: string, category?: string, company?: number, request?: any): Promise<import("./entities/product.entity").Product[]>;
    findAllActive(): Promise<import("./entities/product.entity").Product[]>;
    findOneBySlug(slug: string, request?: any): Promise<import("./entities/product.entity").Product>;
    findOne(id: string, company?: number): Promise<import("./entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<[affectedCount: number]>;
}
