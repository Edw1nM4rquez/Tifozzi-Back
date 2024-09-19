import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(req: any, createCartDto: CreateCartDto): Promise<import("./entities/cart.entity").Cart>;
    findAll(): Promise<import("./entities/cart.entity").Cart[]>;
    findOne(req: any): Promise<import("./entities/cart.entity").Cart>;
    update(req: any, updateCartDto: UpdateCartDto): Promise<import("./entities/cart.entity").Cart>;
    remove(req: any): Promise<number>;
}
