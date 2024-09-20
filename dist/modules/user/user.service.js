"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const constants_1 = require("../../core/constants");
const sequelize_1 = require("sequelize");
let UserService = class UserService {
    constructor(userRepository, sequelize) {
        this.userRepository = userRepository;
        this.sequelize = sequelize;
    }
    async create(user, type, accountVerified = false) {
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
    async findAllUsers() {
        return await this.userRepository.findAll({
            attributes: { exclude: ['password', 'type'] },
            where: {
                type: 'ADMIN',
            },
        });
    }
    async findAllClients(q) {
        let whereCondition = {};
        if (q) {
            whereCondition = {
                type: 'CLIENT',
                [sequelize_1.Op.or]: [
                    { ruc: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { name: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { surname: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { fullName: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { phone: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { email: { [sequelize_1.Op.iLike]: `%${q}%` } },
                ],
            };
        }
        else {
            whereCondition = {
                type: 'CLIENT',
            };
        }
        return await this.userRepository.findAll({
            attributes: { exclude: ['password', 'type'] },
            where: whereCondition,
        });
    }
    async findOne(id) {
        return await this.userRepository.findOne({
            where: { id },
        });
    }
    async findOneByEmail(email) {
        return await this.userRepository.findOne({
            where: { email },
            attributes: { exclude: ['type'] },
        });
    }
    async update(id, user) {
        if (user.password) {
            user.password = await this.hashPassword(user.password);
        }
        else {
            delete user.password;
        }
        return await this.userRepository.update(user, {
            where: { id },
            individualHooks: true,
        });
    }
    async verifyUser(id) {
        return await this.userRepository.update({ accountVerified: true }, {
            where: {
                id: id,
            },
        });
    }
    async changePassword(id, password) {
        const hasPass = await this.encryptPassword(password);
        return await this.userRepository.update({ password: hasPass }, {
            where: {
                id: id,
            },
        });
    }
    async encryptPassword(password) {
        const saltHash = await bcrypt.genSalt();
        return await bcrypt.hash(password, saltHash);
    }
    async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
    async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
    async findBirthday(month, day) {
        return await this.userRepository.findAll({
            where: {
                type: 'CLIENT',
                [sequelize_1.Op.and]: [
                    this.sequelize.literal(`EXTRACT(MONTH FROM "dateOfBirth") = ${month}`),
                    this.sequelize.literal(`EXTRACT(DAY FROM "dateOfBirth") = ${day}`),
                ],
            },
            attributes: ['id', 'name', 'surname', 'fullName', 'dateOfBirth'],
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_REPOSITORY)),
    __param(1, (0, common_1.Inject)('SEQUELIZE')),
    __metadata("design:paramtypes", [Object, sequelize_1.Sequelize])
], UserService);
//# sourceMappingURL=user.service.js.map