import { IsNotEmpty } from 'class-validator';

export class CreateEmissionPointDto {
  @IsNotEmpty()
  readonly serie: string;
  @IsNotEmpty()
  readonly number: number;
}
