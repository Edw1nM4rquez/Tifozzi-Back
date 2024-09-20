import { Model } from 'sequelize-typescript';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Role extends Model<Role> {
    name: string;
    description: string;
    isActive: boolean;
    users: User[];
}
