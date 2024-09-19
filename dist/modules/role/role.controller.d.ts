import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRoleDto: UpdateRoleDto): string;
    remove(id: string): string;
}
