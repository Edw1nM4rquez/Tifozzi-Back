import { Inject, Injectable, UseGuards } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { STATE_REPOSITORY } from 'src/core/constants';
import { State } from './entities/state.entity';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';
import { IsAdminGuard } from 'src/core/guards/is-admin.guard';
import { Country } from '../country/entities/country.entity';
@UseGuards(JwtAuthGuard, IsAdminGuard)
@Injectable()
export class StateService {
  constructor(
    @Inject(STATE_REPOSITORY)
    private readonly stateRepository: typeof State,
  ) {}

  async create(createStateDto: CreateStateDto) {
    return await this.stateRepository.create(createStateDto);
  }

  async findAll() {
    return await this.stateRepository.findAll({
      include: [
        {
          model: Country,
          //include: [{ model: Price, where: { companyBranchId: company } }],
        },
      ],
    });
  }

  async findAllActive() {
    return await this.stateRepository.findAll({ where: { isActive: true } });
  }

  async findOne(id: number) {
    return await this.stateRepository.findByPk(id);
  }

  async update(id: number, updateStateDto: UpdateStateDto) {
    return await this.stateRepository.update(updateStateDto, {
      where: { id },
    });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} country`;
  // }
}
