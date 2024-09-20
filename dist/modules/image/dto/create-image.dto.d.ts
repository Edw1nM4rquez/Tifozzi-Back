/// <reference types="multer" />
export declare class CreateImageDto {
    readonly alt: string;
    readonly title: string;
    readonly description: string;
    files: Express.Multer.File[];
}
