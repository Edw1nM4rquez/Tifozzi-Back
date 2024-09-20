import { CreateEmissionPointDto } from './dto/create-emission-point.dto';
import { UpdateEmissionPointDto } from './dto/update-emission-point.dto';
import { EmissionPoint } from './entities/emission-point.entity';
export declare class EmissionPointService {
    private readonly emissionPointRepository;
    constructor(emissionPointRepository: typeof EmissionPoint);
    create(createEmissionPointDto: CreateEmissionPointDto): Promise<EmissionPoint>;
    findAll(): Promise<EmissionPoint[]>;
    findAllActive(): Promise<EmissionPoint[]>;
    findOne(id: number): Promise<EmissionPoint>;
    update(id: number, updateEmissionPointDto: UpdateEmissionPointDto): Promise<[affectedCount: number]>;
}
