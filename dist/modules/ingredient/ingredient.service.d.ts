import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';
export declare class IngredientService {
    private readonly ingredientRepository;
    constructor(ingredientRepository: typeof Ingredient);
    create(createIngredientDto: CreateIngredientDto): Promise<Ingredient>;
    findAll(): Promise<Ingredient[]>;
    findAllActive(): Promise<Ingredient[]>;
    findOne(id: number): Promise<Ingredient>;
    update(id: number, updateIngredientDto: UpdateIngredientDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
