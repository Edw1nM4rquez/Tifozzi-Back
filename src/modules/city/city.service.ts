import { Inject, Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { CITY_REPOSITORY } from 'src/core/constants';
import { City } from './entities/city.entity';
import { State } from '../state/entities/state.entity';
import { Country } from '../country/entities/country.entity';

@Injectable()
export class CityService {
  constructor(
    @Inject(CITY_REPOSITORY)
    private readonly cityRepository: typeof City,
  ) {}

  async create(createCityDto: CreateCityDto) {
    return await this.cityRepository.create(createCityDto);
  }

  async findAll() {
    return await this.cityRepository.findAll({
      include: [
        {
          model: State,
          include: [{ model: Country }],
        },
      ],
    });
  }

  async findAllActive() {
    return await this.cityRepository.findAll({ where: { isActive: true } });
  }
  
  async findAllByState(id: number) {
    return await this.cityRepository.findAll({ where: { stateId: id } });
  }

  async findOne(id: number) {
    return await this.cityRepository.findByPk(id);
  }

  async update(id: number, updateCityDto: UpdateCityDto) {
    return await this.cityRepository.update(updateCityDto, {
      where: { id },
    });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} country`;
  // }
}
