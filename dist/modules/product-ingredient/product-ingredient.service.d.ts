import { CreateProductIngredientDto } from './dto/create-product-ingredient.dto';
import { UpdateProductIngredientDto } from './dto/update-product-ingredient.dto';
export declare class ProductIngredientService {
    create(createProductIngredientDto: CreateProductIngredientDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductIngredientDto: UpdateProductIngredientDto): string;
    remove(id: number): string;
}
