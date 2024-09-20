import { Model } from 'sequelize-typescript';
export declare class Image extends Model<Image> {
    img: string;
    name: string;
    alt: string;
    title: string;
    description: string;
    size: number;
    length: string;
}
