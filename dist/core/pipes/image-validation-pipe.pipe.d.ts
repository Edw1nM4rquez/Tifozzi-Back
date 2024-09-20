/// <reference types="multer" />
import { PipeTransform } from '@nestjs/common';
export declare class ImageValidationPipe implements PipeTransform<Express.Multer.File[], Promise<Express.Multer.File[]>> {
    transform(value: Express.Multer.File[]): Promise<Express.Multer.File[]>;
}
