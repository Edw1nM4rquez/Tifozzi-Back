import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { UniqueConstraintError } from 'sequelize';
export declare class UniqueConstraintFilterFilter<T> implements ExceptionFilter {
    catch(exception: UniqueConstraintError, host: ArgumentsHost): void;
}
