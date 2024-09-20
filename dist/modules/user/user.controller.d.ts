import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UserUpdateDto } from './dto/userUpdate.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: UserDto): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findAllClients(q?: string): Promise<User[]>;
    findBirthday(month?: number, day?: number): Promise<any>;
    findOne(id: string): Promise<User>;
    update(id: string, user: UserUpdateDto): Promise<any>;
}
