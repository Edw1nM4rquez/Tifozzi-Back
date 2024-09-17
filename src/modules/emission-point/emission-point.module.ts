import { Module } from '@nestjs/common';
import { EmissionPointService } from './emission-point.service';
import { EmissionPointController } from './emission-point.controller';
import { EmissionPoint } from './entities/emission-point.entity';
import { EMISSION_POINT_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [EmissionPointController],
  providers: [
    EmissionPointService,
    {
      provide: EMISSION_POINT_REPOSITORY,
      useValue: EmissionPoint,
    },
  ],
  //exports: [EmissionPointService],
})
export class EmissionPointModule {}
