import { IsBoolean, IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  readonly name: string;

  readonly description: string;

  @IsUrl()
  readonly slug: string;

  @IsBoolean()
  readonly isVisibleWeb: boolean;

  readonly imagenId: number;
}
