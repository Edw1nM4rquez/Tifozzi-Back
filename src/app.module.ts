import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { ModulesModule } from './modules/modules.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env'],
      isGlobal: true,
    }),
    DatabaseModule,
    ModulesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../'),
      renderPath: '/uploads',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
