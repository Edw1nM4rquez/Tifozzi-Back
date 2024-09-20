import { ArgumentMetadata, ValidationPipe } from '@nestjs/common';
export declare class ValidateInputPipe extends ValidationPipe {
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
    private handleError;
}
