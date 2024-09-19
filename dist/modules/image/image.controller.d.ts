/// <reference types="multer" />
import { ImageService } from './image.service';
import { UpdateImageDto } from './dto/update-image.dto';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    create(files: Express.Multer.File[]): Promise<any[]>;
    findAll(q?: string): Promise<import("./entities/image.entity").Image[]>;
    findOne(id: string): string;
    update(id: string, updateImageDto: UpdateImageDto): string;
    remove(id: string): string;
}
