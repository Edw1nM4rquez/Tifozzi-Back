import {
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateOrderDetailDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly quantity: string;

  @IsNotEmpty()
  @IsDecimal()
  readonly price: number;

  @IsNotEmpty()
  @IsDecimal()
  readonly originPrice: number;

  @IsNotEmpty()
  @IsDecimal()
  readonly discountPrecent: number;

  @IsNotEmpty()
  @IsDecimal()
  readonly discount: number;

  @IsNotEmpty()
  @IsBoolean()
  readonly isIva: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly isInventoried: boolean;

  @IsNotEmpty()
  @IsDecimal()
  readonly subtotal: number;

  @IsNotEmpty()
  @IsDecimal()
  readonly total: number;

  @IsNotEmpty()
  @IsNumber()
  readonly productId: number;

  //@IsNotEmpty()
  //@IsNumber()
  readonly orderId: number;
}
