declare enum Gender {
    MALE = "male",
    FEMALE = "female"
}
export declare class UserUpdateDto {
    readonly name: string;
    readonly surname: string;
    readonly phone: string;
    readonly ruc: string;
    readonly address: string;
    readonly email: string;
    password: string;
    readonly type: string;
    readonly dateOfBirth: Date;
    readonly gender: Gender;
}
export {};
