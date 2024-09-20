export declare class CreateProductDto {
    readonly code: string;
    readonly name: string;
    readonly description: string;
    readonly slug: string;
    readonly metaDescription: string;
    readonly isInventoried: boolean;
    readonly isIva: boolean;
    readonly isVisibleWeb: boolean;
    readonly categoryId: number;
    readonly ingredients: number[];
    readonly images: number[];
}
