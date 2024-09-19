import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
export declare class CountryService {
    private readonly countryRepository;
    constructor(countryRepository: typeof Country);
    create(createCountryDto: CreateCountryDto): Promise<Country>;
    findAll(): Promise<Country[]>;
    findAllActive(): Promise<Country[]>;
    findOne(id: number): Promise<Country>;
    update(id: number, updateCountryDto: UpdateCountryDto): Promise<[affectedCount: number]>;
}
