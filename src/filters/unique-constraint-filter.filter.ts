import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { UniqueConstraintError } from 'sequelize';

@Catch(UniqueConstraintError)
export class UniqueConstraintFilterFilter<T> implements ExceptionFilter {
  catch(exception: UniqueConstraintError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: any = ctx.getResponse<Response>();

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Unique constraint violation',
      details: exception.errors.map((err) => err.message),
    });
  }
}
