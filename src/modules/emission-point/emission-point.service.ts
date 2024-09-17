import { Inject, Injectable } from '@nestjs/common';
import { CreateEmissionPointDto } from './dto/create-emission-point.dto';
import { UpdateEmissionPointDto } from './dto/update-emission-point.dto';
import { EMISSION_POINT_REPOSITORY } from 'src/core/constants';
import { EmissionPoint } from './entities/emission-point.entity';

@Injectable()
export class EmissionPointService {
  constructor(
    @Inject(EMISSION_POINT_REPOSITORY)
    private readonly emissionPointRepository: typeof EmissionPoint,
  ) {}

  async create(createEmissionPointDto: CreateEmissionPointDto) {
    return await this.emissionPointRepository.create(createEmissionPointDto);
  }

  async findAll() {
    return await this.emissionPointRepository.findAll();
  }

  async findAllActive() {
    return await this.emissionPointRepository.findAll({
      where: { isActive: true },
    });
  }

  async findOne(id: number) {
    return await this.emissionPointRepository.findByPk(id);
  }

  async update(id: number, updateEmissionPointDto: UpdateEmissionPointDto) {
    return await this.emissionPointRepository.update(updateEmissionPointDto, {
      where: { id },
    });
  }
}
