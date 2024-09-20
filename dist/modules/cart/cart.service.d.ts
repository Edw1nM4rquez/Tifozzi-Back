import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';
import { Sequelize } from 'sequelize';
export declare class CartService {
    private readonly cartRepository;
    private readonly sequelize;
    constructor(cartRepository: typeof Cart, sequelize: Sequelize);
    create(createCartDto: CreateCartDto, userId: number): Promise<Cart>;
    findAll(): Promise<Cart[]>;
    findOneByUser(userId?: number): Promise<Cart>;
    update(updateCartDto: UpdateCartDto, userId: number): Promise<Cart>;
    remove(userId: number): Promise<number>;
}
