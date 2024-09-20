import { ProductIngredientService } from './product-ingredient.service';
import { CreateProductIngredientDto } from './dto/create-product-ingredient.dto';
import { UpdateProductIngredientDto } from './dto/update-product-ingredient.dto';
export declare class ProductIngredientController {
    private readonly productIngredientService;
    constructor(productIngredientService: ProductIngredientService);
    create(createProductIngredientDto: CreateProductIngredientDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProductIngredientDto: UpdateProductIngredientDto): string;
    remove(id: string): string;
}
