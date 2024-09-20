import { ModuleService } from './module.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
export declare class ModuleController {
    private readonly moduleService;
    constructor(moduleService: ModuleService);
    create(createModuleDto: CreateModuleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateModuleDto: UpdateModuleDto): string;
    remove(id: string): string;
}
