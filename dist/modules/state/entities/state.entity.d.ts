import { Model } from 'sequelize-typescript';
import { Address } from 'src/modules/address/entities/address.entity';
import { City } from 'src/modules/city/entities/city.entity';
import { Country } from 'src/modules/country/entities/country.entity';
export declare class State extends Model<State> {
    name: string;
    isActive: boolean;
    countryId: number;
    country: Country;
    cities: City[];
    addresses: Address[];
}
