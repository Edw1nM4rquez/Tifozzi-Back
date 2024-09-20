import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
export declare class IngredientController {
    private readonly ingredientService;
    constructor(ingredientService: IngredientService);
    create(createIngredientDto: CreateIngredientDto): Promise<import("./entities/ingredient.entity").Ingredient>;
    findAll(): Promise<import("./entities/ingredient.entity").Ingredient[]>;
    findAllActive(): Promise<import("./entities/ingredient.entity").Ingredient[]>;
    findOne(id: string): Promise<import("./entities/ingredient.entity").Ingredient>;
    update(id: string, updateIngredientDto: UpdateIngredientDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
