import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsObject,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from 'src/modules/address/dto/create-address.dto';

export class CreateCompanyBranchDto {
  @IsNotEmpty()
  readonly companyName: string;
  @IsNotEmpty()
  @Min(10)
  @Max(13)
  readonly ruc: string;
  @IsNotEmpty()
  readonly iva: number;
  @IsNotEmpty()
  readonly printTicket: boolean;
  @IsNotEmpty()
  readonly isAccounting: boolean;
  @IsNotEmpty()
  readonly isRimpe: boolean;
  @IsNotEmpty()
  readonly isWithholdingAgent: boolean;
  readonly resolutionAgent: string;
  readonly rimpeDescription: string;
  @IsNotEmpty()
  readonly environment: number;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  readonly address: CreateAddressDto;
  
  @IsNotEmpty()
  readonly companyId: number;
  @IsNotEmpty()
  readonly emissionPointId: number;
  readonly signatureId: number;
}
