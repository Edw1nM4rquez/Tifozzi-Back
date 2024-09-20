import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("./entities/category.entity").Category>;
    findAll(q?: string): Promise<import("./entities/category.entity").Category[]>;
    findAllWithProducts(q?: string, request?: any): Promise<import("./entities/category.entity").Category[]>;
    findAllActive(q?: string): Promise<import("./entities/category.entity").Category[]>;
    findOne(id: string): Promise<import("./entities/category.entity").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
