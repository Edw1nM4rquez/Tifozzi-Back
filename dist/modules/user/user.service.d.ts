import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { Sequelize } from 'sequelize';
export declare class UserService {
    private readonly userRepository;
    private readonly sequelize;
    constructor(userRepository: typeof User, sequelize: Sequelize);
    create(user: UserDto, type: string, accountVerified?: boolean): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findAllClients(q: string): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    update(id: number, user: UserUpdateDto): Promise<any>;
    verifyUser(id: string): Promise<any>;
    changePassword(id: string, password: string): Promise<any>;
    private encryptPassword;
    hashPassword(password: any): Promise<any>;
    comparePassword(enteredPassword: any, dbPassword: any): Promise<any>;
    findBirthday(month: number, day: number): Promise<any>;
}
