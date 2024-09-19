import { Model } from 'sequelize-typescript';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Department extends Model<Department> {
    name: string;
    description: string;
    isActive: boolean;
    users: User[];
}
