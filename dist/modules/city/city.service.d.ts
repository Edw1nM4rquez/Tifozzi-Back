import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
export declare class CityService {
    private readonly cityRepository;
    constructor(cityRepository: typeof City);
    create(createCityDto: CreateCityDto): Promise<City>;
    findAll(): Promise<City[]>;
    findAllActive(): Promise<City[]>;
    findAllByState(id: number): Promise<City[]>;
    findOne(id: number): Promise<City>;
    update(id: number, updateCityDto: UpdateCityDto): Promise<[affectedCount: number]>;
}
