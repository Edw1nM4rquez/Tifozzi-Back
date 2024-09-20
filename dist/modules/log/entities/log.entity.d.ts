import { Model } from 'sequelize-typescript';
export declare class Log extends Model<Log> {
    message: string;
    module: string;
    class: string;
    method: string;
    data: string;
}
