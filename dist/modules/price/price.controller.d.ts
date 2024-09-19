import { PriceService } from './price.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
export declare class PriceController {
    private readonly priceService;
    constructor(priceService: PriceService);
    create(createPriceDto: CreatePriceDto): Promise<import("./entities/price.entity").Price>;
    findAll(): Promise<import("./entities/price.entity").Price[]>;
    findAllActive(): Promise<import("./entities/price.entity").Price[]>;
    findOne(id: string): Promise<import("./entities/price.entity").Price>;
    update(id: string, updatePriceDto: UpdatePriceDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
