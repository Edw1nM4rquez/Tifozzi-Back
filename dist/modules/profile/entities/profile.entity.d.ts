import { Model } from 'sequelize-typescript';
import { Permission } from 'src/modules/permission/entities/permission.entity';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Profile extends Model<Profile> {
    name: string;
    description: string;
    isActive: boolean;
    users: User[];
    permission: Permission[];
}
