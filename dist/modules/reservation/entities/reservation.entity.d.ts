import { Model } from 'sequelize-typescript';
import { Table as TableEntity } from 'src/modules/table/entities/table.entity';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Reservation extends Model<Reservation> {
    date: Date;
    name: string;
    phone: string;
    email: string;
    description: string;
    tableId: number;
    table: TableEntity;
    userId: number;
    user: User;
}
