import { Inject, Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { TABLE_REPOSITORY } from 'src/core/constants';
import { Table } from './entities/table.entity';
import { Zone } from '../zone/entities/zone.entity';

@Injectable()
export class TableService {
  constructor(
    @Inject(TABLE_REPOSITORY)
    private readonly tableRepository: typeof Table,
  ) {}

  create(createTableDto: CreateTableDto) {
    return this.tableRepository.create(createTableDto);
  }

  findAll() {
    return this.tableRepository.findAll();
  }

  findAactives() {
    return this.tableRepository.findAll({ where: { isActive: true } });
  }

  findByZone(is: number) {
    return this.tableRepository.findAll({
      where: { zoneId: is, isActive: true },
    });
  }

  findOne(id: number) {
    return this.tableRepository.findByPk(id, {
      include: [{ model: Zone }],
    });
  }

  update(id: number, updateTableDto: UpdateTableDto) {
    return this.tableRepository.update(updateTableDto, { where: { id: id } });
  }

  remove(id: number) {
    return this.tableRepository.destroy({ where: { id: id } });
  }
}
