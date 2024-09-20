import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { State } from './entities/state.entity';
export declare class StateService {
    private readonly stateRepository;
    constructor(stateRepository: typeof State);
    create(createStateDto: CreateStateDto): Promise<State>;
    findAll(): Promise<State[]>;
    findAllActive(): Promise<State[]>;
    findOne(id: number): Promise<State>;
    update(id: number, updateStateDto: UpdateStateDto): Promise<[affectedCount: number]>;
}
