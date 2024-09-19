import { Model } from 'sequelize-typescript';
import { Table as TableEntity } from 'src/modules/table/entities/table.entity';
export declare class Zone extends Model<Zone> {
    name: string;
    description: string;
    isActive: boolean;
    tables: TableEntity[];
}
