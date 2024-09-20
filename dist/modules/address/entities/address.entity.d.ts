import { Model } from 'sequelize-typescript';
import { City } from 'src/modules/city/entities/city.entity';
import { Country } from 'src/modules/country/entities/country.entity';
import { State } from 'src/modules/state/entities/state.entity';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Address extends Model<Address> {
    name: string;
    phone: string;
    address: string;
    isPrimary: boolean;
    isActive: boolean;
    countryId: number;
    country: Country;
    stateId: number;
    state: State;
    cityId: number;
    city: City;
    userId: number;
    user: User;
}
