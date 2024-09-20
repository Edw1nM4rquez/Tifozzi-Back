import { Model } from 'sequelize-typescript';
import { Reservation } from 'src/modules/reservation/entities/reservation.entity';
import { Zone } from 'src/modules/zone/entities/zone.entity';
export declare class Table extends Model<Table> {
    number: number;
    description: string;
    isActive: boolean;
    zoneId: number;
    zone: Zone;
    reservations: Reservation[];
}
