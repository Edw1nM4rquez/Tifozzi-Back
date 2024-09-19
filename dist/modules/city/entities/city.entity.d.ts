import { Model } from 'sequelize-typescript';
import { Address } from 'src/modules/address/entities/address.entity';
import { State } from 'src/modules/state/entities/state.entity';
export declare class City extends Model<City> {
    name: string;
    isActive: boolean;
    stateId: number;
    state: State;
    addresses: Address[];
}
