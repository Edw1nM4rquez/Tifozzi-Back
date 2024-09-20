import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
export declare class OrderDetailService {
    create(createOrderDetailDto: CreateOrderDetailDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrderDetailDto: UpdateOrderDetailDto): string;
    remove(id: number): string;
}
