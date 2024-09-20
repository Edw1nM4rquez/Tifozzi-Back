import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: typeof Category);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(q?: string): Promise<Category[]>;
    findAllWithProducts(q?: string, company?: number): Promise<Category[]>;
    findAllActive(q?: string): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
