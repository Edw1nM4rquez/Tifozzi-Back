import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { Zone } from './entities/zone.entity';
export declare class ZoneService {
    private readonly zoneRepository;
    constructor(zoneRepository: typeof Zone);
    create(createZoneDto: CreateZoneDto): Promise<Zone>;
    findAll(): Promise<Zone[]>;
    findActive(): Promise<Zone[]>;
    findOne(id: number): Promise<Zone>;
    update(id: number, updateZoneDto: UpdateZoneDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
