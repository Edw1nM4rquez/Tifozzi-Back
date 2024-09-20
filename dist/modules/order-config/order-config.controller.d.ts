import { OrderConfigService } from './order-config.service';
import { CreateOrderConfigDto } from './dto/create-order-config.dto';
import { UpdateOrderConfigDto } from './dto/update-order-config.dto';
export declare class OrderConfigController {
    private readonly orderConfigService;
    constructor(orderConfigService: OrderConfigService);
    create(createOrderConfigDto: CreateOrderConfigDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrderConfigDto: UpdateOrderConfigDto): string;
    remove(id: string): string;
}
