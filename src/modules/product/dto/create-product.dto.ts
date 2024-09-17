import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  readonly code: string;
  @IsNotEmpty()
  readonly name: string;
  readonly description: string;
  @IsUrl()
  readonly slug: string;
  readonly metaDescription: string;
  @IsBoolean()
  readonly isInventoried: boolean;
  @IsBoolean()
  readonly isIva: boolean;
  @IsBoolean()
  readonly isVisibleWeb: boolean;
  @IsInt()
  readonly categoryId: number;

  @IsArray()
  //@ArrayNotEmpty()
  readonly ingredients: number[];

  @IsArray()
  //@ArrayNotEmpty()
  readonly images: number[];
}
