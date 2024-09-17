import { IsNotEmpty } from "class-validator";

export class CreateCountryDto {
    @IsNotEmpty()
    readonly name: string;
  
    @IsNotEmpty()
    readonly code: string;
  
    @IsNotEmpty()
    readonly prefix: string;
}
