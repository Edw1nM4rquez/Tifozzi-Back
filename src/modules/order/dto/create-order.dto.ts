import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  //@IsNotEmpty()
  readonly observation: string;

  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @IsDecimal()
  readonly subtotal: number;

  @IsNotEmpty()
  @IsDecimal()
  readonly subIva: number;

  @IsNotEmpty()
  @IsDecimal()
  readonly subZero: number;

  @IsNotEmpty()
  @IsDecimal()
  readonly ivaPrecent: number;

  @IsNotEmpty()
  @IsDecimal()
  readonly iva: number;

  @IsNotEmpty()
  @IsDecimal()
  readonly discount: number;

  @IsNotEmpty()
  @IsDecimal()
  readonly total: number;

  @IsNotEmpty()
  @IsString()
  readonly status: string;

  @IsNotEmpty()
  @IsNumber()
  readonly userId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly companyBranchId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly addressId: number;

  @IsArray()
  @ArrayNotEmpty()
  readonly detail: any[];
}
