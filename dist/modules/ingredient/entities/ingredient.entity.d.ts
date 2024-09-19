import { Model } from 'sequelize-typescript';
import { Image } from 'src/modules/image/entities/image.entity';
export declare class Ingredient extends Model<Ingredient> {
    name: string;
    description: string;
    isActive: boolean;
    imagenId: number;
    image: Image;
}
