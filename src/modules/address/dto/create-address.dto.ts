import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  readonly id: number;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  readonly isPrimary: boolean;

  @IsNotEmpty()
  readonly countryId: number;

  @IsNotEmpty()
  readonly stateId: number;

  @IsNotEmpty()
  readonly cityId: number;

  readonly isActive: boolean;
  userId: number;
}
