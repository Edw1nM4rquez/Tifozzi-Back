import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
export declare class StateController {
    private readonly stateService;
    constructor(stateService: StateService);
    create(createStateDto: CreateStateDto): Promise<import("./entities/state.entity").State>;
    findAll(): Promise<import("./entities/state.entity").State[]>;
    findAllActive(): Promise<import("./entities/state.entity").State[]>;
    findOne(id: string): Promise<import("./entities/state.entity").State>;
    update(id: string, updateStateDto: UpdateStateDto): Promise<[affectedCount: number]>;
}
