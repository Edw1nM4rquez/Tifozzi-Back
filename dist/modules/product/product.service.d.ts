import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Sequelize } from 'sequelize';
export declare class ProductService {
    private readonly productRepository;
    private readonly sequelize;
    constructor(productRepository: typeof Product, sequelize: Sequelize);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(q?: string, category?: string, company?: number): Promise<Product[]>;
    findAllActive(): Promise<Product[]>;
    findOneBySlug(slug: string, company?: number): Promise<Product>;
    findOne(id: number, company?: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<[affectedCount: number]>;
}
