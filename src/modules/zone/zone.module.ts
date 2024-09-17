import { Module } from '@nestjs/common';
import { ZoneService } from './zone.service';
import { ZoneController } from './zone.controller';
import { ZONE_REPOSITORY } from 'src/core/constants';
import { Zone } from './entities/zone.entity';

@Module({
  controllers: [ZoneController],
  providers: [
    ZoneService,
    {
      provide: ZONE_REPOSITORY,
      useValue: Zone,
    },
  ],
})
export class ZoneModule {}
