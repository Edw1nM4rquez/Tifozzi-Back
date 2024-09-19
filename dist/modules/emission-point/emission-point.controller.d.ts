import { EmissionPointService } from './emission-point.service';
import { CreateEmissionPointDto } from './dto/create-emission-point.dto';
import { UpdateEmissionPointDto } from './dto/update-emission-point.dto';
export declare class EmissionPointController {
    private readonly emissionPointService;
    constructor(emissionPointService: EmissionPointService);
    create(createEmissionPointDto: CreateEmissionPointDto): Promise<import("./entities/emission-point.entity").EmissionPoint>;
    findAll(): Promise<import("./entities/emission-point.entity").EmissionPoint[]>;
    findAllActive(): Promise<import("./entities/emission-point.entity").EmissionPoint[]>;
    findOne(id: string): Promise<import("./entities/emission-point.entity").EmissionPoint>;
    update(id: string, updateEmissionPointDto: UpdateEmissionPointDto): Promise<[affectedCount: number]>;
}
