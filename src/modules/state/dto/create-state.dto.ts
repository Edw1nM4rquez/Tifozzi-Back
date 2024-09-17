import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateStateDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly countryId: number;
}
