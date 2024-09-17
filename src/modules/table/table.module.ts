import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { TABLE_REPOSITORY } from 'src/core/constants';
import { Table } from './entities/table.entity';

@Module({
  controllers: [TableController],
  providers: [
    TableService,
    {
      provide: TABLE_REPOSITORY,
      useValue: Table,
    },
  ],
})
export class TableModule {}
