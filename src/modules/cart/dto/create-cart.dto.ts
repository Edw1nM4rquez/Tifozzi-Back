import {
  IsArray,
  IsBoolean,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsUrl,
} from 'class-validator';
import { CartDetail } from 'src/modules/cart-detail/entities/cart-detail.entity';

export class CreateCartDto {
  id: number;
  @IsNotEmpty()
  readonly date: Date;
  readonly observation: string;
  readonly phone: string;
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
  @IsNumber()
  readonly userId: number;
  
  @IsNotEmpty()
  @IsNumber()
  readonly companyBranchId: number;

  @IsArray()
  readonly detail: CartDetail[];
}
