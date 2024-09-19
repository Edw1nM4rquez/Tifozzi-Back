import { Model } from 'sequelize-typescript';
import { Address } from 'src/modules/address/entities/address.entity';
import { State } from 'src/modules/state/entities/state.entity';
export declare class Country extends Model<Country> {
    name: string;
    code: string;
    prefix: string;
    isActive: boolean;
    players: State[];
    addresses: Address[];
}
