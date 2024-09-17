import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { Country } from './entities/country.entity';
import { COUNTRY_REPOSITORY } from 'src/core/constants';

@Module({
  controllers: [CountryController],
  providers: [
    CountryService,
    {
      provide: COUNTRY_REPOSITORY,
      useValue: Country,
    },
  ],
  exports: [CountryService],
})
export class CountryModule {}
