import { Model } from 'sequelize-typescript';
export declare class Module extends Model<Module> {
    name: string;
    path: string;
    icon: string;
    code: string;
    isActive: boolean;
    moduleId: number;
    country: Module;
    childrens: Module[];
}
