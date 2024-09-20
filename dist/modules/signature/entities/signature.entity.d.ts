import { Model } from 'sequelize-typescript';
export declare class Signature extends Model<Signature> {
    file: string;
    password: string;
    expiration: Date;
    description: string;
}
