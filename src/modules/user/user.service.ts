import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { USER_REPOSITORY } from 'src/core/constants';
import { UserDto } from './dto/user.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { Op, Sequelize } from 'sequelize';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    @Inject('SEQUELIZE')
    private readonly sequelize: Sequelize,
  ) {}

  async create(
    user: UserDto,
    type: string,
    accountVerified: boolean = false,
  ): Promise<User> {
    const password = await this.hashPassword(user.password);
    const newUser = await this.userRepository.create({
      ...user,
      password,
      type,
      accountVerified,
    });
    newUser.password = undefined;
    newUser.uuid = undefined;
    newUser.type = undefined;
    return newUser;
  }

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll({
      attributes: { exclude: ['password', 'type'] },
      where: {
        type: 'ADMIN',
      },
    });
  }

  async findAllClients(q: string): Promise<User[]> {
    let whereCondition = {};

    if (q) {
      whereCondition = {
        type: 'CLIENT',
        [Op.or]: [
          { ruc: { [Op.iLike]: `%${q}%` } },
          { name: { [Op.iLike]: `%${q}%` } },
          { surname: { [Op.iLike]: `%${q}%` } },
          { fullName: { [Op.iLike]: `%${q}%` } },
          { phone: { [Op.iLike]: `%${q}%` } },
          { email: { [Op.iLike]: `%${q}%` } },
        ],
      };
    } else {
      whereCondition = {
        type: 'CLIENT',
      };
    }

    return await this.userRepository.findAll({
      attributes: { exclude: ['password', 'type'] },
      where: whereCondition,
    });
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { email },
      attributes: { exclude: ['type'] },
    });
  }

  async update(id: number, user: UserUpdateDto): Promise<any> {
    if (user.password) {
      user.password = await this.hashPassword(user.password);
    } else {
      delete user.password;
    }
    return await this.userRepository.update(user, {
      where: { id },
      individualHooks: true,
    });
  }

  // remove(id: number): Promise<user> {
  //   return `This action removes a #${id} user`;
  // }

  async verifyUser(id: string): Promise<any> {
    return await this.userRepository.update(
      { accountVerified: true },
      {
        where: {
          id: id,
        },
      },
    );
  }

  async changePassword(id: string, password: string): Promise<any> {
    const hasPass = await this.encryptPassword(password);
    return await this.userRepository.update(
      { password: hasPass },
      {
        where: {
          id: id,
        },
      },
    );
  }

  private async encryptPassword(password: string): Promise<string> {
    const saltHash = await bcrypt.genSalt();
    return await bcrypt.hash(password, saltHash);
  }

  public async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  public async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }

  async findBirthday(month: number, day: number): Promise<any> {
    return await this.userRepository.findAll({
      where: {
        type: 'CLIENT',
        [Op.and]: [
          this.sequelize.literal(
            `EXTRACT(MONTH FROM "dateOfBirth") = ${month}`,
          ),
          this.sequelize.literal(`EXTRACT(DAY FROM "dateOfBirth") = ${day}`),
        ],
      },
      attributes: ['id', 'name', 'surname', 'fullName', 'dateOfBirth'],
    });
  }
}
