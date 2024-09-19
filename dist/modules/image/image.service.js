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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const uuid_1 = require("uuid");
const fs = require("fs");
const constants_1 = require("../../core/constants");
const sharp = require("sharp");
const sequelize_1 = require("sequelize");
let ImageService = class ImageService {
    constructor(imageRepository, sequelize) {
        this.imageRepository = imageRepository;
        this.sequelize = sequelize;
    }
    async create(files) {
        const uploadedImages = [];
        const uploadDirectory = path.join(process.cwd(), 'uploads', 'images');
        if (!fs.existsSync(uploadDirectory)) {
            fs.mkdirSync(uploadDirectory, { recursive: true });
        }
        for (const file of files) {
            const uniqueFilename = (0, uuid_1.v4)() + path.extname(file.originalname);
            const filePath = path.join(uploadDirectory, uniqueFilename);
            await fs.promises.writeFile(filePath, file.buffer);
            let length = '';
            const dimensions = await this.getImageDimensions(filePath);
            if (dimensions) {
                const { width, height } = dimensions;
                length = `${width}x${height}`;
            }
            await this.imageRepository.create({
                img: path.join('uploads', 'images', uniqueFilename),
                name: file.originalname,
                alt: file.originalname,
                title: file.originalname,
                size: file.size,
                length,
            });
            uploadedImages.push({ filename: uniqueFilename, path: filePath });
        }
        return uploadedImages;
    }
    async getImageDimensions(filePath) {
        try {
            const metadata = await sharp(filePath).metadata();
            const { width, height } = metadata;
            return { width, height };
        }
        catch (error) {
            console.error('Error obteniendo dimensiones de imagen:', error);
            return null;
        }
    }
    async findAll(q) {
        let whereCondition = {};
        if (q) {
            whereCondition = {
                [sequelize_1.Op.or]: [
                    { name: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { alt: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { title: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { description: { [sequelize_1.Op.iLike]: `%${q}%` } },
                    { img: { [sequelize_1.Op.iLike]: `%${q}%` } },
                ],
            };
        }
        const products = await this.imageRepository.findAll({
            where: whereCondition,
            order: [['id', 'DESC']],
        });
        return products;
    }
    findOne(id) {
        return `This action returns a #${id} image`;
    }
    update(id, updateImageDto) {
        return `This action updates a #${id} image`;
    }
    remove(id) {
        return `This action removes a #${id} image`;
    }
};
exports.ImageService = ImageService;
exports.ImageService = ImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.IMAGE_REPOSITORY)),
    __param(1, (0, common_1.Inject)('SEQUELIZE')),
    __metadata("design:paramtypes", [Object, sequelize_1.Sequelize])
], ImageService);
//# sourceMappingURL=image.service.js.map