import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
export declare class ModuleService {
    create(createModuleDto: CreateModuleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateModuleDto: UpdateModuleDto): string;
    remove(id: number): string;
}
