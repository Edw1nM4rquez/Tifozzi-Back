import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { Price } from './entities/price.entity';
import { Sequelize } from 'sequelize';
export declare class PriceService {
    private readonly priceRepository;
    private readonly sequelize;
    constructor(priceRepository: typeof Price, sequelize: Sequelize);
    create(createPriceDto: CreatePriceDto): Promise<Price>;
    findAll(): Promise<Price[]>;
    findAllActive(): Promise<Price[]>;
    findOne(id: number): Promise<Price>;
    update(id: number, updatePriceDto: UpdatePriceDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
