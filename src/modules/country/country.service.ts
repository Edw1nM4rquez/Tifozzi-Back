import { Inject, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { COUNTRY_REPOSITORY } from 'src/core/constants';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @Inject(COUNTRY_REPOSITORY)
    private readonly countryRepository: typeof Country,
  ) {}

  async create(createCountryDto: CreateCountryDto) {
    return await this.countryRepository.create(createCountryDto);
  }

  async findAll() {
    return await this.countryRepository.findAll();
  }

  async findAllActive() {
    return await this.countryRepository.findAll({ where: { isActive: true } });
  }

  async findOne(id: number) {
    console.log("findOne", id);
    return await this.countryRepository.findByPk(id);
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    return await this.countryRepository.update(updateCountryDto, {
      where: { id },
    });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} country`;
  // }
}
