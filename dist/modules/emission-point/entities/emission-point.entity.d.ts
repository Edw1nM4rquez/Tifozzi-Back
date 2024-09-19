import { Model } from 'sequelize-typescript';
export declare class EmissionPoint extends Model<EmissionPoint> {
    serie: string;
    number: number;
    isActive: boolean;
}
