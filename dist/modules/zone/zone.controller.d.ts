import { ZoneService } from './zone.service';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
export declare class ZoneController {
    private readonly zoneService;
    constructor(zoneService: ZoneService);
    create(createZoneDto: CreateZoneDto): Promise<import("./entities/zone.entity").Zone>;
    findAll(): Promise<import("./entities/zone.entity").Zone[]>;
    findAllActive(): Promise<import("./entities/zone.entity").Zone[]>;
    findOne(id: string): Promise<import("./entities/zone.entity").Zone>;
    update(id: string, updateZoneDto: UpdateZoneDto): Promise<[affectedCount: number]>;
}
