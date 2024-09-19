import { CreateAddressDto } from 'src/modules/address/dto/create-address.dto';
declare enum Gender {
    MALE = "male",
    FEMALE = "female"
}
export declare class UserDto {
    readonly name: string;
    readonly surname: string;
    readonly phone: string;
    readonly ruc: string;
    readonly email: string;
    readonly type: string;
    readonly password: string;
    readonly dateOfBirth: Date;
    readonly gender: Gender;
    readonly address: CreateAddressDto;
}
export {};
