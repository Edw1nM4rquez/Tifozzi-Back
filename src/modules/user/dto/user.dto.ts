import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  IsDate,
  ValidateNested,
  IsObject,
  MaxLength,
} from 'class-validator';
import { CreateAddressDto } from 'src/modules/address/dto/create-address.dto';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class UserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly surname: string;

  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(13)
  readonly ruc: string;

  //@IsNotEmpty()
  //readonly address: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly type: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsDate()
  readonly dateOfBirth: Date;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'gender must be either male or female',
  })
  readonly gender: Gender;

  //@IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  readonly address: CreateAddressDto;
}
