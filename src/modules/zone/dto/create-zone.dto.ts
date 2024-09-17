import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateZoneDto {
  @IsNotEmpty()
  readonly name: string;

  readonly description: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly isActive: boolean;
}
