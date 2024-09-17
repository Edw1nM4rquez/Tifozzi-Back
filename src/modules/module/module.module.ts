import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';

import { Module as ModuleEntity } from './entities/module.entity';
import { MODULE_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [ModuleController],
  providers: [
    ModuleService,
    {
      provide: MODULE_REPOSITORY,
      useValue: ModuleEntity,
    },
  ],
})
export class ModuleModule {}
