import { Inject, Injectable } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { ZONE_REPOSITORY } from 'src/core/constants';
import { Zone } from './entities/zone.entity';

@Injectable()
export class ZoneService {
  constructor(
    @Inject(ZONE_REPOSITORY)
    private readonly zoneRepository: typeof Zone,
  ) {}

  async create(createZoneDto: CreateZoneDto) {
    return await this.zoneRepository.create(createZoneDto);
  }

  async findAll() {
    return await this.zoneRepository.findAll();
  }

  async findActive() {
    return await this.zoneRepository.findAll({ where: { isActive: true } });
  }

  findOne(id: number) {
    return this.zoneRepository.findByPk(id);
  }

  update(id: number, updateZoneDto: UpdateZoneDto) {
    return this.zoneRepository.update(updateZoneDto, { where: { id } });
  }

  remove(id: number) {
    return this.zoneRepository.destroy({ where: { id } });
  }
}
