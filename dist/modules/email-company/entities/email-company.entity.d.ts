import { Model } from 'sequelize-typescript';
export declare class EmailCompany extends Model<EmailCompany> {
    host: string;
    port: number;
    password: string;
    ssl: boolean;
    from: string;
}
