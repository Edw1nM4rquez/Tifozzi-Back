import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { ValidateInputPipe } from './core/pipes/validate.pipe';
import * as cookieParser from 'cookie-parser';
import { UniqueConstraintFilterFilter } from './filters/unique-constraint-filter.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookieParser());
  app.setGlobalPrefix('api/v1');
  //app.useGlobalPipes(new ValidateInputPipe());
  app.useGlobalFilters(new UniqueConstraintFilterFilter());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
