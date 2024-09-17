import { IsNotEmpty } from 'class-validator';

export class CreateIngredientDto {
  @IsNotEmpty()
  readonly name: string;
  readonly description: string;
  readonly imagenId: number;
}
