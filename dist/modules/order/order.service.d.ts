import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Sequelize } from 'sequelize';
export declare class OrderService {
    private readonly orderRepository;
    private readonly sequelize;
    constructor(orderRepository: typeof Order, sequelize: Sequelize);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(dateInit: string, dateEnd: string, q: string): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order>;
}
