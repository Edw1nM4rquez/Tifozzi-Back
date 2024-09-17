import { ArrayNotEmpty, IsArray, IsNotEmpty } from 'class-validator';

export class CreatePriceDto {
  @IsNotEmpty()
  readonly name: string;
  readonly description: string;
  readonly incrementPercentage: number;
  @IsNotEmpty()
  readonly companyBranchId: number;
  @IsArray()
  @ArrayNotEmpty()
  readonly detail: any[];
}
