import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogController } from './log.controller';
import { Log } from './entities/log.entity';
import { LOG_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [LogController],
  providers: [
    LogService,
    {
      provide: LOG_REPOSITORY,
      useValue: Log,
    },
  ],
})
export class LogModule {}
