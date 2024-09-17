import { Inject, Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { INGREDIENT_REPOSITORY } from 'src/core/constants';
import { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @Inject(INGREDIENT_REPOSITORY)
    private readonly ingredientRepository: typeof Ingredient,
  ) {}

  async create(createIngredientDto: CreateIngredientDto) {
    return await this.ingredientRepository.create(createIngredientDto);
  }

  async findAll() {
    return await this.ingredientRepository.findAll();
  }

  async findAllActive() {
    return await this.ingredientRepository.findAll({
      where: { isActive: true },
    });
  }

  async findOne(id: number) {
    return await this.ingredientRepository.findByPk(id);
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return await this.ingredientRepository.update(updateIngredientDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.ingredientRepository.destroy({
      where: { id },
    });
  }
}
