import { CreateCartDetailDto } from './dto/create-cart-detail.dto';
import { UpdateCartDetailDto } from './dto/update-cart-detail.dto';
export declare class CartDetailService {
    create(createCartDetailDto: CreateCartDetailDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCartDetailDto: UpdateCartDetailDto): string;
    remove(id: number): string;
}
