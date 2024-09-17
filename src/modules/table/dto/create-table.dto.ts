import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTableDto {
  @IsNotEmpty()
  readonly number: number;

  readonly description: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly isActive: boolean;

  @IsNotEmpty()
  @IsNumber()
  readonly zoneId: number;
}
