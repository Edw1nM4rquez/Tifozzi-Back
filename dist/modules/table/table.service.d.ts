import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
export declare class TableService {
    private readonly tableRepository;
    constructor(tableRepository: typeof Table);
    create(createTableDto: CreateTableDto): Promise<Table>;
    findAll(): Promise<Table[]>;
    findAactives(): Promise<Table[]>;
    findByZone(is: number): Promise<Table[]>;
    findOne(id: number): Promise<Table>;
    update(id: number, updateTableDto: UpdateTableDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
