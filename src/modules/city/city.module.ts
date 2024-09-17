import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { City } from './entities/city.entity';
import { CITY_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [CityController],
  providers: [
    CityService,
    {
      provide: CITY_REPOSITORY,
      useValue: City,
    },
  ],
  exports: [CityService],
})
export class CityModule {}
