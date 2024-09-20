import { CreateOrderConfigDto } from './dto/create-order-config.dto';
import { UpdateOrderConfigDto } from './dto/update-order-config.dto';
export declare class OrderConfigService {
    create(createOrderConfigDto: CreateOrderConfigDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrderConfigDto: UpdateOrderConfigDto): string;
    remove(id: number): string;
}
