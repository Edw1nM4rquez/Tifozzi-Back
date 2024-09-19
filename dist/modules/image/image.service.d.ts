/// <reference types="multer" />
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import { Sequelize } from 'sequelize';
export declare class ImageService {
    private readonly imageRepository;
    private readonly sequelize;
    constructor(imageRepository: typeof Image, sequelize: Sequelize);
    create(files: Express.Multer.File[]): Promise<any[]>;
    private getImageDimensions;
    findAll(q?: string): Promise<Image[]>;
    findOne(id: number): string;
    update(id: number, updateImageDto: UpdateImageDto): string;
    remove(id: number): string;
}
