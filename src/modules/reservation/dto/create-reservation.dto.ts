import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsDate()
  readonly date: Date;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  readonly email: string;

  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly tableId: number;

  //@IsNumber()
  readonly userId: number | null;
}
