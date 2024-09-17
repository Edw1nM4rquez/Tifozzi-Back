import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  IsDate,
  MaxLength,
} from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class UserUpdateDto {
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

  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @MinLength(6)
  password: string;

  @IsNotEmpty()
  readonly type: string;

  @IsNotEmpty()
  @IsDate()
  readonly dateOfBirth: Date;

  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'gender must be either male or female',
  })
  readonly gender: Gender;
}
