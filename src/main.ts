import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { ValidateInputPipe } from './core/pipes/validate.pipe';
import * as cookieParser from 'cookie-parser';
import { UniqueConstraintFilterFilter } from './filters/unique-constraint-filter.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://tifozzi.com', // Reemplaza con tu dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
});
  app.use(cookieParser());
  app.setGlobalPrefix('api/v1');
  //app.useGlobalPipes(new ValidateInputPipe());
  app.useGlobalFilters(new UniqueConstraintFilterFilter());
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
