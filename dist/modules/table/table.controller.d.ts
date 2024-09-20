import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
export declare class TableController {
    private readonly tableService;
    constructor(tableService: TableService);
    create(createTableDto: CreateTableDto): Promise<import("./entities/table.entity").Table>;
    findAll(): Promise<import("./entities/table.entity").Table[]>;
    findAactives(): Promise<import("./entities/table.entity").Table[]>;
    findByZone(id: string): Promise<import("./entities/table.entity").Table[]>;
    findOne(id: string): Promise<import("./entities/table.entity").Table>;
    update(id: string, updateTableDto: UpdateTableDto): Promise<[affectedCount: number]>;
}
