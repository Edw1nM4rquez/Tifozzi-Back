import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
export declare class PermissionController {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    create(createPermissionDto: CreatePermissionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePermissionDto: UpdatePermissionDto): string;
    remove(id: string): string;
}
